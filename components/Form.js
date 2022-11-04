import React, { Component } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native';

 class Form extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            pass:'',
            address:''
        }
    }

    submit(){
        // alert("function celled")
        console.warn("first",this.state)
       
    }
  render() {
    return (
      <View style={{top:40}}>
    
      <TextInput  style={styles.textBox} placeholder='enter name' onChangeText={(text)=>{this.setState({name:text})}} />
      <TextInput  secureTextEntry={true} style={styles.textBox}  placeholder='enter password' onChangeText={(text)=>{this.setState({pass:text})}} />
      <TextInput  style={styles.textBox}  placeholder='enter address' onChangeText={(text)=>{this.setState({address:text})}} />
      <Button title="submit" onPress={()=> this.submit()} />

      </View>
    )
  }
}
const styles=StyleSheet.create({
    textBox:{
        borderColor:'skyblue',
        borderWidth:2,
        padding:10,
        marginHorizontal:20,
        marginVertical:20,
        fontSize:20

    }
})
export default Form;