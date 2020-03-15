import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import RecipeCard from '../components/shared/RecipeCard'
import { APP_ID, APP_KEY } from 'react-native-dotenv'
import Constants from 'expo-constants';





function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default function SavedScreen({navigation}) {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => { 
    getRecipes();
  }, []);
  
  
  const getRecipes = async () => {
    const response =  await fetch(
      `https://api.edamam.com/search?q=tofu&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    const formatted_res = [];
    console.log(data);
    data.hits.map((res) => {
      formatted_res.push(
        {
          name: res.recipe.label,
          image: res.recipe.image,
          ingredients: res.recipe.ingredientLines,
          cookTime: res.recipe.totalTime
        }
      );
    });


    // formatted_res = [
    //     {
    //         "cookTime": 0,
    //         "image": "https://www.edamam.com/web-img/7b3/7b34f65772c77c43fbfa483ea9475513.jpg",
    //         "ingredients": undefined,
    //         "name": "Black Pepper Tofu",
    //     },
    //     {
    //         "cookTime": 108,
    //         "image": "https://www.edamam.com/web-img/7b1/7b1117396eeebef5da2d1d3e6c0ad8f0.jpg",
    //         "ingredients": undefined,
    //         "name": "Tofu Banana Mousse",
    //       },
    //       {
    //         "cookTime": 10,
    //         "image": "https://www.edamam.com/web-img/d50/d5015f52972ebbf2746ae592d477dc4d.jpg",
    //         "ingredients": undefined,
    //         "name": "Creamy Tofu Sauce Recipe",
    //       },
        

    // ]
    // create new array of json objects by parsing mapping response.json.map
    // then save the resulting array as recipes
    console.log(formatted_res);
    setRecipes(formatted_res);
  }
    // const [reviews, setReviews] = useState([
    //     { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    //     { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    //     { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    //   ]);
    return (
    <View style={styles.container}>
      <FlatList data={recipes} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('RecipeScreen', item)}>
          <RecipeCard
          name={item.name} 
          image={item.image}
          >
          </RecipeCard>
        </TouchableOpacity>
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

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
