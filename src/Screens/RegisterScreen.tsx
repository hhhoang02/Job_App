import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Back from './Back';

const RegisterScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Back navigation={navigation} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Hello! Register to get started</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your confirm password"
          secureTextEntry
        />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.registerLink}>Login Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;

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
  itemButton: {
    width: '30%',
    borderWidth: 0.5,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
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
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#E8ECF4', // Adjust background color as needed
  },
  contentContainer: {
    marginTop: 50,
    width: '100%',
    flex: 1,
    padding: 25,
  },
});
