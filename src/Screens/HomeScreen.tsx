// HomeScreen.tsx

import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSearchQuery,
  setJobSuggestions,
  setListJob,
  selectJobState,
} from '../Redux/slices/jobSlice';
import {
  setFilterJobType,
  selectFilterJobType,
  selectFilterSalary,
  setFilterSalary,
} from '../Redux/slices/filterSlice';

interface JobType {
  id: string;
  name: string;
}

interface Job {
  id: string;
  title: string;
  company: string;
  image: string;
  jobType: JobType;
  salary: number;
}

const screenWidth = Dimensions.get('window').width;

const HomeScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const { searchQuery, jobSuggestions, listJob } = useSelector(selectJobState);
  const filterJobType = useSelector(selectFilterJobType);
  const filterSalary = useSelector(selectFilterSalary);
  const inputRef = useRef<any>(null);

  useEffect(() => {
    let filteredJobs = listJob.filter((job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filterJobType) {
      filteredJobs = filteredJobs.filter((job) => job.jobType.id === filterJobType);
    }

    if (filterSalary) {
      filteredJobs = filteredJobs.filter((job) => job.salary === filterSalary);
    }

    dispatch(setJobSuggestions(filteredJobs));
  }, [searchQuery, filterJobType, filterSalary, listJob, dispatch]);

  const handleSearch = () => {
    dispatch(setSearchQuery(searchQuery));

    const updatedList = listJob.filter((job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    dispatch(setJobSuggestions(updatedList));
  };

  const handleFilterByType = (type: JobType | null) => {
    const filterId = type ? type.id : null;
    dispatch(setFilterJobType(filterId));
  };

  const handleFilterBySalary = (salary: number | null) => {
    dispatch(setFilterSalary(salary));
  };

  const renderSalaryFilterButton = (salary: number | null, label: string) => (
    <TouchableOpacity
      style={styles.filterButton}
      onPress={() => handleFilterBySalary(salary)}>
      <Text style={styles.filterButtonText}>{label}</Text>
    </TouchableOpacity>
  );

  const renderJobItem = ({ item }: { item: Job }) => (
    <TouchableOpacity
      style={styles.jobItem}
      onPress={() => console.log(`Job selected: ${item.title}`)}>
      <Image source={{ uri: item.image }} style={styles.jobImage} />
      <View style={styles.jobTextContainer}>
        <Text style={styles.jobTitle}>{item.title}</Text>
        <Text style={styles.jobCompany}>{item.company}</Text>
        <Text style={styles.jobType}>{item.jobType.name}</Text>
        <Text style={styles.jobSalary}>{item.salary}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Tìm kiếm công việc..."
            value={searchQuery}
            onChangeText={(text) => dispatch(setSearchQuery(text))}
            ref={inputRef}
          />

          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Icon name="search" size={20} color="white" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.iconButton}>
          <Icon name="notifications" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="heart" size={20} color="red" />
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.filterContainer}>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => handleFilterByType(null)}>
            <Text style={styles.filterButtonText}>All Job Types</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => handleFilterByType({ id: '1', name: 'Full-Time' })}>
            <Text style={styles.filterButtonText}>Full-Time</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => handleFilterByType({ id: '2', name: 'Part-Time' })}>
            <Text style={styles.filterButtonText}>Part-Time</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => handleFilterByType({ id: '3', name: 'Contract' })}>
            <Text style={styles.filterButtonText}>Contract</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.filterContainer}>
          {renderSalaryFilterButton(null, 'All Salaries')}
          {renderSalaryFilterButton(2000, 'Up to $2000')}
          {renderSalaryFilterButton(3000, 'Up to $3000')}
          {renderSalaryFilterButton(4000, 'Up to $4000')}
        </View>
      </ScrollView>

      <FlatList
        data={jobSuggestions}
        renderItem={renderJobItem}
        keyExtractor={(item) => item.id}
        style={styles.jobListContainer}
      />
    </View>
  );
};

export default HomeScreen;

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: screenWidth * 0.7,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'gray',
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 8,
    color: 'black',
  },
  searchButton: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    padding: 10,
  },
  filterContainer: {
    height: 50,
    flexDirection: 'row',
    marginBottom: 16,
  },
  filterButton: {
    height: 50,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: 'lightblue',
    borderRadius: 20,
    marginLeft: 8,
  },
  filterButtonText: {
    color: 'black',
  },
  jobListContainer: {
   
  },
  jobItem: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  jobImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  jobTextContainer: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  jobCompany: {
    color: 'gray',
    marginBottom: 4,
  },
  jobType: {
    color: 'blue',
  },
  jobSalary: {
    color: 'red',
  },
});
