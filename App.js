
import { StyleSheet, Text, View } from 'react-native';
import colors from './config/colors';
import LoginScreen from './Screens/LoginScreen'
import UserSelectionScreen from './Screens/UserSelectionScreen';
import ConfirmPasswordScreen from './Screens/ConfirmPasswordScreen';

export default function App() {

  return (

    <View style={styles.container}>
<ConfirmPasswordScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
