import { Dimensions, Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');

const MainScreen = ({navigation}:any) => {
  // Tính toán kích thước và vị trí dựa trên kích thước màn hình
  const imageSize = Math.min(width * 0.7, height * 0.3);
  const marginTopValue = height * 0.5;

  return (
    <ImageBackground source={require('../Assets/Images/background.png')} style={styles.background}>
      <View style={[styles.overlay, { marginTop: marginTopValue }]}>
        <Image source={require('../Assets/Images/logoIcon.png')} />
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 25 }}>
            Fruzz
          </Text>
          <Text style={{ marginLeft: 5, color: 'black', fontSize: 25 }}>
            digital
          </Text>
        </View>
        <View style={styles.group}>
          <Pressable style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonTextLogin}>Login</Text>
          </Pressable>
          <Pressable style={styles.registerButton} onPress={() => navigation.navigate('Register')}>
            <Text style={styles.buttonTextRegister}>Register</Text>
          </Pressable>
        </View>
        <Text style={styles.guestText}>Continue as a guest</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  guestText: {
    marginBottom: 30,
  },
  group: {
    width: '100%',
    height: '60%',
    padding: 15,
    marginTop: 20,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    width: '100%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    height: 50,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'black',
    marginTop: 20,
  },
  registerButton: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    marginTop: 20,
  },
  buttonTextLogin: {
    color: 'white',
    fontWeight: '300',
    fontSize: 20,
  },
  buttonTextRegister: {
    color: 'black',
    fontWeight: '300',
    fontSize: 20,
  },
});

export default MainScreen;
