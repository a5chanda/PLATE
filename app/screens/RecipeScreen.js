  
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Card from '../components/shared/Card';

const globalStyles = StyleSheet.create({
    titleText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    paragraph: {
      marginVertical: 8,
      lineHeight: 20,
    },
    container: {
      flex: 1,
      padding: 20,
    },
  });

export default function RecipeScreen( recipe ) {
    console.log(recipe.route['params']['title']);
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>
          {/* { recipe.route['params']['title'] } */}
        </Text>
        <Text>{ recipe.route['params']['body'] }</Text>
        <Text>{ recipe.route['params']['rating'] }</Text> 
        <Text>asdasds</Text>
      </Card>
    </View>
  );
}