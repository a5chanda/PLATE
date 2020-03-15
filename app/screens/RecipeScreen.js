  
import React from 'react';
import { StyleSheet, View,  } from 'react-native';
import { FlatList, Image } from "react-native";
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
    image: {
        borderRadius: 10,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        
    },
    item: {
        marginVertical: 6,
        marginHorizontal: 16,
    },
    itemText: {
        fontSize: 15,
        marginLeft:3,
        fontWeight:"200"
    },
    title: {
        fontSize: 15,
        marginLeft:3,
        fontWeight:"400"
    },
    title2: {
        fontSize: 15,
        marginLeft:3,
        fontWeight:"400"
    },
  });

function Item({ title }) {
    return (
        <View style={globalStyles.item}>
        <Text style={globalStyles.itemText}>{title}</Text>
        </View>
    );
}


export default function RecipeScreen( recipe ) {
    console.log(recipe.route['params']['title']);
    let ingredients = recipe.route['params']['ingredients'];
    return (
        <View style={globalStyles.container}>
            <Image style={globalStyles.image} source = { {uri: recipe.route['params']['image']} }/>
            <Card>
                <Text style={globalStyles.titleText}>
                { recipe.route['params']['name'] }
                </Text>
                <Text style={globalStyles.title}>
                {"Cooking Time: " + 
                recipe.route['params']['cookTime'] + 
                " Minutes"}
                </Text>
                <Text style={globalStyles.title2}>
                    Ingredients:
                </Text>
                <FlatList
                    data={recipe.route['params']['ingredients']}
                    renderItem={({ item }) => <Item title={"• " + item} />}
                    keyExtractor={item => item.id}
                />
            </Card>
            <CameraButton style={{borderRadius: 10}}></CameraButton>
            
            
            
        </View>
  );
}