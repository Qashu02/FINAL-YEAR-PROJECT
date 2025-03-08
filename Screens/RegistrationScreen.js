import React from 'react';
import { 
  View, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  ScrollView, 
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import TopVector from '../components/Login/TopVector';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

function RegistrationScreen(props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboardView}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <View style={styles.vectorContainer}>
            <TopVector />
          </View>
          
          <View style={styles.content}>
            <Text style={styles.head}>Registration</Text>
            <AppTextInput icon={"account"} placeholder={"Enter Name"} style={styles.input} />
            <AppTextInput icon={"email"} placeholder={"Enter Email"} style={styles.input} />
            <AppTextInput icon={"lock"} placeholder={"Create Password"} style={styles.input} />
            <AppTextInput icon={"lock"} placeholder={"Confirm Password"} style={styles.input} />
            
            <AppButton title={"Create Account"} style={styles.button} />
            <TouchableOpacity style={styles.textContainer}>
              <Text style={styles.text}>I already have an account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  container:{
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  vectorContainer: {
    width: "100%",
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
 
  },
  content:{
    width: "90%",
 
  },
  head:{
    fontSize: 20,
    fontWeight: 'bold',
marginBottom:5
  },
 
  button: {
    marginTop: 20,
   
  },
  textContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop:20
   
  },
  text: {
    textAlign: 'center',
   
  }
})

export default RegistrationScreen;