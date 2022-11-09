import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Image, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
    return (
      <Button
        title="Go to Rajnish's profile"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Rajnish Pandey' })
        }
      />
    );
  };
  const ProfileScreen = ({ navigation, route }) => {
    return    <View> 
         <Text>This is {route.params.name}'s profile</Text> 
                 
               </View>;
  };


  export default MyStack;