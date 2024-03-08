// jobSlice.ts

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store'; // Adjust the path

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

interface JobState {
  searchQuery: string;
  jobSuggestions: Job[];
  listJob: Job[];
  filterJobType: string | null;
  filterSalary: number | null;
}

const initialState: JobState = {
  searchQuery: '',
  jobSuggestions: [],
  listJob: [
    {
      id: '1',
      title: 'Software Engineer',
      company: 'TechCo',
      image:
        'https://ik.imagekit.io/tvlk/blog/2023/04/go-and-share-bai-bien-viet-nam-5.jpeg',
      jobType: {id: '1', name: 'Full-Time'},
      salary: 2000
    },
    {
      id: '2',
      title: 'Product Manager',
      company: 'InnovateCorp',
      image:
        'https://ik.imagekit.io/tvlk/blog/2023/04/go-and-share-bai-bien-viet-nam-5.jpeg',
      jobType: {id: '2', name: 'Contract'},
      salary: 3000
    },
    {
      id: '3',
      title: 'UX Designer',
      company: 'DesignStudio',
      image:
        'https://ik.imagekit.io/tvlk/blog/2023/04/go-and-share-bai-bien-viet-nam-5.jpeg',
      jobType: {id: '3', name: 'Part-Time'},
      salary: 4000
    },
  ],
  filterJobType: null,
  filterSalary: null,
};

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setJobSuggestions: (state, action: PayloadAction<Job[]>) => {
      state.jobSuggestions = action.payload;
    },
    setListJob: (state, action: PayloadAction<Job[]>) => {
      state.listJob = action.payload;
    },
    setFilterJobType: (state, action: PayloadAction<string | null>) => {
      state.filterJobType = action.payload;
    },
    setFilterSalary: (state, action: PayloadAction<number | null>) => {
      state.filterSalary = action.payload;
    },
  },
});

export const {setSearchQuery, setJobSuggestions, setListJob, setFilterSalary} = jobSlice.actions;

export const selectJobState = (state: RootState) => state.job;

export default jobSlice.reducer;
