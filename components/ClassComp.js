import React, { Component } from "react";
import { Text, View, Button, StyleSheet, TextInput } from "react-native";

class ClassComp extends Component {
  constructor() {
    super();
    this.state = {
      data: "some app data",
      name:''
    };
  }
  render() {
    return (
      <View>
        <Text style={[styles.colors,styles.fonts]}>{this.state.data} </Text>
        <Text  style={[styles.others,styles.fonts]} > {this.state.name} </Text>
        <TextInput style={{height:60,fontSize:40}} placeholder="enter your name" onChangeText={(e)=>{this.setState({name:e})}} />
        <Button
          title="submit"
          onPress={() =>alert(
            this.state.name
          )}
        />
     
        {/* <Button
          title="update"
          onPress={() => {
            this.setState({ data: "updated new data !" });
          }}
        /> */}
      </View>
    );
  }
}

const styles=StyleSheet.create({
 colors:{ fontSize: 20 ,
  color:'red',
   backgroundColor:'blue',
  margin:50
   
},
fonts:{
  fontSize:30,
  fontWeight:'bold'
},
others:{
  color:'green'
}

})
export default ClassComp;
