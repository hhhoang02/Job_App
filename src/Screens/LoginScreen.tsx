import { Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Back from './Back'

const LoginScreen = ({navigation}:any) => {
  return (
    <View style={styles.container}>
      <Back navigation={navigation} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome back! Glad to see you again!</Text>
      
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
         
        />
          <TouchableOpacity style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={()=> navigation.navigate('BottomTabs')}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        <View style={{width: '100%', height: '7%',alignItems:'center'}}>
          <Text style={{}}>Or Login with</Text>
        </View>
        <View style={styles.socialLoginContainer}>
          <TouchableOpacity style={styles.itemButton}>
            <Image source={require('../Assets/Images/fb.png')} style={styles.socialIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemButton}>
            <Image source={require('../Assets/Images/gg.png')} style={{width: 35, height: 35}} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemButton}>
            <Image source={require('../Assets/Images/ios.png')} style={{width: 35, height: 35}} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerLink}>Register Now</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  registerContainer: {
    marginBottom: 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  registerText: {
    color: 'black',
  },
  registerLink: {
    color: 'blue',
    marginLeft: 5,
  },
  itemButton:{
    width: '30%',
    borderWidth: 0.5,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor:'white',
    justifyContent: 'center',
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
  },
  input: {
    borderRadius: 5,
    height: 56,
    borderColor: 'gray',
    borderWidth: 0.5,
    marginBottom: 16,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  forgotPassword: {
    color: 'blue',
    marginBottom: 16,

  },
  loginButton: {
      backgroundColor: 'black',
      paddingVertical: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginBottom: 16,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
  socialLoginContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialIcon: {
    width: 50,
    height: 50,
    marginHorizontal: 8,
  },
  title:{
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#E8ECF4', // Adjust background color as needed
  },
  contentContainer: {
    marginTop: 50,
    width: '100%',
    flex: 1,
    padding: 25
  },
})