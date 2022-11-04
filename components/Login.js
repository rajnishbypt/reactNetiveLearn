import React from 'react'
import { Button, View } from 'react-native'

const Login = () => {
    const login=()=>{
        alert("Rajnish")
      }
  return (
     <View style={{margin:40}}>
         <Button title='login'  onPress={login} />
     </View>
  )
}

export default Login