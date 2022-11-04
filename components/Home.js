import React from 'react'
import {View , Text, } from 'react-native'

const Home = (props) => {
  return (
    <View>
        <Text style={{fontSize:50}} > {props.data} </Text>
    </View>
  )
}

export default Home