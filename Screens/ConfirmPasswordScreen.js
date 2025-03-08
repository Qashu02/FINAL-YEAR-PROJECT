import React from 'react';
import { View,StyleSheet ,Text} from 'react-native';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import TopVector from '../components/Login/TopVector';
function ConfirmPasswordScreen(props) {
    return (
        
  <View style={styles.container}> 
<TopVector/>
  
  <View style={styles.content}>
    <Text style={styles.text}> Choose New Password </Text>
<AppTextInput style={styles.input} placeholder={'Enter Password'}  lock={'eye'}/>
<AppTextInput style={styles.input} placeholder={'Confirm Password'}  lock={"eye"}/>

<AppButton title={'Submit'}/>
  </View>
  
  </View>
    );
}
const styles = StyleSheet.create({
    container:{
width:"100%",
alignItems:'center'
    },
    content:{
        marginTop:50,
        width:"90%"
    },
    text:{
        fontSize:18,
        fontWeight:"bold"
    },input:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
})
export default ConfirmPasswordScreen;