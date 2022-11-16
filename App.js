import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/button';
import ImageViewer from './components/ImageViewer';
const PlaceholderImage = require('./assets/backgroun-image.jpg');

export default function App() {
  return (
    <View style={styles.container}>
       <ImageViewer  placeholderImageSource={PlaceholderImage} />
       <View style={styles.footerContainer}>
        <Button label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
