import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {CameraScreen} from './CameraScreen';
import CameraButton from '../components/CameraButton';
import {RecipeCard} from '../components/shared/RecipeCard';
import {Card, theme} from "galio-framework";

export default function RewardsScreen() {
  return (  
      
     <ScrollView>
    <RecipeCard></RecipeCard>
    </ScrollView>  
   
  );
}



