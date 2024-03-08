import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import Interview from './Interview';
import Submitted from './Submitted';




const ProfileScreen = () => {
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.top}>
          <View style={styles.topRight}>
            <Image
              style={{width: 110, height: 110, borderRadius: 55}}
              source={require('../Assets/Images/Bien.jpg')}
            />
          </View>
          <View style={styles.topLeft}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
              Huỳnh Huy Hoàng
            </Text>
            <Text style={{marginTop: 7, fontSize: 15, color: 'black'}}>
              IT Phần mềm
            </Text>
          </View>
        </View>
        <View style={styles.center}>
        
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    width: '100%',
    height: '18%',
  },
  topLeft: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '75%',
    height: '100%',
  },
  topRight: {
    width: '30%',
    height: '90%',
    borderRadius: 100,
  },
  top: {
    flexDirection: 'row',
    width: '100%',
    height: '20%',
  },
  content: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    padding: 15,
  },
});

export default ProfileScreen;
