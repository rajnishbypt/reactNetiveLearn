import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/button';
import ImageViewer from './components/ImageViewer';
const PlaceholderImage = require('./assets/backgroun-image.jpg');
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';


export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result?.uri);
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
  };
  return (
    <View style={styles.container}>
       <ImageViewer  placeholderImageSource={PlaceholderImage}    selectedImage={selectedImage}/>
       <View style={styles.footerContainer}>
        {/* <Button label="Choose a photo" />
        <Button label="Use this photo" /> */}
        <Button theme="primary" label="choose pic" onPress={pickImageAsync} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
     
  },
});
