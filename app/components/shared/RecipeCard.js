import * as React from 'react';
import {Card, theme, withGalio, GalioProvider} from 'galio-framework';

import { View } from 'native-base';

const customTheme = {
    SIZES: { BASE: 18, }, 
    // this will overwrite the Galio SIZES BASE value 16
    COLORS: { PRIMARY: 'red', } 
    // this will overwrite the Galio COLORS PRIMARY color #B23AFC
  };

const styles = theme => StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.COLORS.FACEBOOK
    }
  });

<GalioProvider theme={customTheme}>
    <Card flex borderless style={styles.card}  title="Christopher Moon" caption="139 minutes ago" location="Los Angeles, CA" avatar="http://i.pravatar.cc/100?id=skater" imageStyle={styles.cardImageRadius}
    imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }}image="https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300">
    </Card> 
</GalioProvider>;     

export default withGalio(RecipeCard, styles);


