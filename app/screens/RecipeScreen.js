  
import React from 'react';
import { StyleSheet, View,  } from 'react-native';
import { FlatList } from "react-native";
import { Text, ListItem, Left, Body, Icon, Right, Title } from "native-base";
import CameraButton from "../components/CameraButton";

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

  renderItem = ({ item }) => {

      return (
        <ListItem style={{ marginLeft: 0 }}>
          <Body>
            <Text>{item}</Text>
          </Body>
        </ListItem>
      );
    
  };


export default function RecipeScreen( recipe ) {
    console.log(recipe.route['params']['title']);
    let ingredients = recipe.route['params']['ingredients'];
    return (
        <View style={globalStyles.container}>
            <CameraButton></CameraButton>
            <Card>
                <Text style={globalStyles.titleText}>
                { recipe.route['params']['name'] }
                </Text>
                <FlatList
                    data={recipe.route['params']['ingredients']}
                    renderItem={({ ingredient }) =>{
                        <ListItem style={{ marginLeft: 0 }}>
                            
                            <Text>{ingredient}</Text>
                            
                        </ListItem>
                    }}
                    
                />

                
                <Text>{ recipe.route['params']['ingredients'] }</Text>
                <Text>{ recipe.route['params']['cookTime'] }</Text> 
                <Text>{ recipe.route['params']['image'] }</Text>
            </Card>
        </View>
  );
}