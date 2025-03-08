import React from "react";
import { View, TextInput, StyleSheet,Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";


import colors from "../config/colors";

function AppTextInput({ icon, style,lock,  placeholder, ...otherProps }) {
  return (
    <View style={[styles.container, style]}>
      
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.text}
          style={[styles.icon]}
        />
      )}
 <TextInput   placeholder={placeholder}></TextInput>  
    {lock && (
        <MaterialCommunityIcons
          name={lock}
          size={20}
          color={colors.text}
          style={[styles.icon]}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,

    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10
    ,
    borderColor:'black',
   padding:5,
    borderStyle:"solid", 
    borderWidth:1,
   borderRadius:10

  },
  icon: {
top:10,
    marginRight: 10,
  },
});

export default AppTextInput;
