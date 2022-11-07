import React from "react";
import { View } from "react-native";

const FlexDirection = () => {
  return (
    <View style={{ flexWrap:'wrap', flexDirection: "row",justifyContent:'center',top:20 }}>
      <View style={{ width:150,height:150, backgroundColor: "red" }}></View>
      <View style={{  width:150,height:150, backgroundColor: "blue" }}></View>
      <View style={{  width:150,height:150,backgroundColor: "green" }}></View>
      <View style={{  width:150,height:150, backgroundColor: "yellow" }}></View>
      <View style={{  width:150,height:150,backgroundColor: "pink" }}></View>
    </View>
  );
};

export default FlexDirection;
