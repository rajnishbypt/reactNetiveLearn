import React from 'react'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Feed from './Feed';
import Article from './Article';
import { Text, View } from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerComponent = () => {
    return (
        <Drawer.Navigator>
          <Drawer.Screen name="Feed" component={Feed} />
          <Drawer.Screen name="Article" component={Article} />
          {/* <View>
            <Text>hello</Text>
          </View> */}
        </Drawer.Navigator>
      );
}

export default DrawerComponent;