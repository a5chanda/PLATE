import * as React from 'react';
import {Card, theme} from 'galio-framework';
import { View } from 'react-native';



const styles = theme => StyleSheet.create({
    container: {
      flex: 1
    },
    card: {
        backgroundColor: white
    }
  });


export function RecipeCard(){
    return(
        <Card 
        flex
        style={styles.card}
        title="Christopher Moon"
        caption="139 minutes ago"
        location="Los Angeles, CA"
        avatar="http://i.pravatar.cc/100?id=skater"
        imageStyle={styles.cardImageRadius}
        imageBlockStyle={{ padding: theme.SIZES.BASE / 1}}
        image="https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300"> 
        </Card>
    );
}








