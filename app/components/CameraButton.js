import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {CameraScreen} from "../screens/CameraScreen";
import {Container, Header, Content, Button, Text } from "native-base";

const Stack = createStackNavigator();

function CameraRouter({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Button primary onPress={() => navigation.navigate('Details')}><Text> Upload for Rewards </Text></Button>
      </View>
    );
}

export default function CameraButton({ navigation }) {
  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator initialRouteName="Camera" screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="Camera" component={CameraRouter} />
      <Stack.Screen name="Details" component={CameraScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}