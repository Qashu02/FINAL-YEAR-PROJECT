import React, { useCallback } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from "react-native";
import ConfirmPasswordScreen from "./Screens/ConfirmPasswordScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from './Screens/LoginScreen'

export default function App() {
  // Use this to prevent unnecessary re-renders
  const renderContent = useCallback(() => {
    return <RegistrationScreen/>;
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
      contentContainerStyle={styles.keyboardAvoidContainer}
    >
      <ScrollView
        contentContainerStyle={styles.scrollView}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {renderContent()}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  keyboardAvoidContainer: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
});