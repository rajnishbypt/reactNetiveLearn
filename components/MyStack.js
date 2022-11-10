import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Image, Text, View } from "react-native";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <View style={{ marginTop: 20, justifyContent: "space-between" }}>
        <Button
          title="Go to Rajnish's profile"
          onPress={() =>
            navigation.navigate("Profile", { name: "Rajnish Pandey" })
          }
        />
      </View>
      <View
        style={{
          marginTop: 20,
          justifyContent: "space-between",
          color: "green",
        }}
      >
        <Button
          title="Go to Swami Vivekananda's Details"
          onPress={() =>
            navigation.navigate("Details", { name: "Swami Vivekananda Detail" })
          }
        />
      </View>
    </View>
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return (
    <View>
      <Text>This is {route.params.name}'s profile</Text>
    </View>
  );
};
const DetailScreen = ({ navigation, route }) => {
  return (
    <View  style={{justifyContent:'center'}}>
      <Text>This is {route.params.name} Details</Text>
     
      <Image
        style={{
          width: 200,
          height: 200,
          resizeMode: 'contain',
           margin:"25%"
        }}
        source={{
          uri: 'data:image/jpeg;base64,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',
        }}
      />
       <Text>
        {" "}
        Swami Vivekananda, born Narendranath Datta, was an Indian Hindu monk,
        philosopher, author, religious teacher, and the chief disciple of the
        Indian mystic Ramakrishna
      </Text>
    </View>
  );
};

export default MyStack;
