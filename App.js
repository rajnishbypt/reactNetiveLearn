 
import { StyleSheet, Text, View  } from 'react-native';
import ClassComp from './components/ClassComp';
import Form from './components/Form';
import FixedDimensionsBasics from './components/Hieght';
import Home from './components/Home';
import Login from './components/Login';
import PizzaTranslator from './components/PizzaTrans';
import SectionListBasics from './components/scrollbar';
 

export default function App() {
   const data="Rajnish Pandey"
  return (
    <View  >
      <Text style={styles.main} >Hello React Native</Text>
      {/* <Login />
      <ClassComp /> */}
      {/* <PizzaTranslator /> */}
      {/* <SectionListBasics /> */}
      {/* <FixedDimensionsBasics /> */}
      {/* <Home  data={data} /> */}
      <Form />
    </View>
  );
}

const styles=StyleSheet.create({
  main:{top:5 ,margin:20,color:'red',fontSize:40}
})
 
