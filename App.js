// import { Image, StyleSheet, Text, View } from "react-native";
// import ButtonBasics from "./components/Buttons";
// import ClassComp from "./components/ClassComp";
// import FlexDirectionBasics from "./components/Flex";
// import FlexDirection from "./components/FlexDirection";
// import Form from "./components/Form";
// import FixedDimensionsBasics from "./components/Hieght";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import PizzaTranslator from "./components/PizzaTrans";
// import SectionListBasics from "./components/scrollbar";
// import Flex from "./FlexLayout";

// export default function App() {
//   const data = "Rajnish Pandey";
//   return (
//     // <View>
//     //   <Text style={styles.main}>Hello React Native</Text>
//     //   {/* <Login />
//     //  <ClassComp /> */}
//     //   {/* <PizzaTranslator /> */}
//     //   {/* <SectionListBasics /> */}
//     //   {/* <FixedDimensionsBasics /> */}
//     //   {/* <Home  data={data} /> */}
//     //   {/* <Form /> */}
//     //   <Image
//     //     source={{
//     //       uri: "https://reactjs.org/logo-og.png",
//     //     }}
//     //     style={{ width: 100, height: 80 }}
//     //   />
      
//     // </View>
//     // <FlexDirectionBasics />
//     // <Flex />
//     // <FlexDirection />
//     // <ButtonBasics /
    
//   );
// }

// const styles = StyleSheet.create({
//   main: { top: 5, margin: 20, color: "red", fontSize: 40 },
// });

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './components/MyStack';

const App = () => {
  return (
    // <NavigationContainer>
     <MyStack />
    // </NavigationContainer>
  );
};

export default App;