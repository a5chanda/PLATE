// import * as React from 'react';
// // import {Card, theme} from 'galio-framework';
// import { View, TouchableOpacity } from 'react-native';
// import RecipeScreen from "../../screens/RecipeScreen";
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { Container, Header, Content, CardItem, Body, Text } from 'native-base'
// import { Card, theme } from 'galio-framework'


// const styles = theme => StyleSheet.create({
//     container: {
//       flex: 1
//     },
//     card: {
//         backgroundColor: white
//     }
//   });

//   const Stack = createStackNavigator();

//   function RecipeRouter({ navigation }) {
//       return (
//         <View>
//         <TouchableOpacity
            
//            onPress={() => navigation.navigate('RecipeScreen')}>
//                <Card
//                 flex
//                 borderless
//                 style={styles.card}
//                 title="Christopher Moon"
//                 caption="139 minutes ago"
//                 location="Los Angeles, CA"
//                 avatar="http://i.pravatar.cc/100?id=skater"
//                 imageStyle={styles.cardImageRadius}
//                 imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }}
//                 image="https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300"
//                 ></Card>
// {/*         
//             <Card >
           
//             <Text> dasdoijqwaoijdioqw</Text>
//             </Card> */}
//         </TouchableOpacity> 
//         </View>
       
//       );
//   }
  
//   export default function RecipeCard({ navigation }) {
//     return (
//       <NavigationContainer independent={true}>
//       <Stack.Navigator initialRouteName="Recipe">
//         <Stack.Screen name="Recipe" component={RecipeRouter} />
//         <Stack.Screen name="RecipeScreen" component={RecipeScreen} />
//       </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }


import React, { useState } from 'react';
import {Card, theme} from 'galio-framework';
import { View, TouchableOpacity, Text } from 'react-native';


const styles = theme => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
    card: {
        backgroundColor: white
    }
  });


export function RecipeCard(props){
    console.log(props);
    return(
         <Card 
          flex
          style={styles.card}
          title={props.name}
          cookTime={props.cookTime}
        //   location="Los Angeles, CA"
          avatar="https://www.pngfind.com/pngs/m/52-526485_heart-icon-instagram-like-icon-png-transparent-png.png"
          imageStyle={styles.cardImageRadius}
          imageBlockStyle={{ padding: theme.SIZES.BASE / 1}}
          image={props.image}
          > 
        <Text ></Text>
        </Card>
   
    );
}


export default RecipeCard;












