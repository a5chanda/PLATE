import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import BrowseScreen from '../screens/BrowseScreen';
import SavedScreen from '../screens/SavedScreen';
import RewardsScreen from '../screens/RewardsScreen';
import HealthScreen from '../screens/HealthScreen';
import CameraScreen from '../screens/CameraScreen';


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';




export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html

    var headerStyles = { 
        headerTitle: getHeaderTitle(route), 
        headerTitleAlign: "left",
        headerStyle: {
            height: 130, // Specify the height of your custom header
            
        },
        headerTitleStyle: {
            borderWidth: 0,
            color: "green"
        }
    };

  navigation.setOptions(headerStyles);

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME} tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}>
      <BottomTab.Screen
        name="Home"
        component={BrowseScreen}
        options={{
          title: 'Browse',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-search" />,
        }}
      />
      <BottomTab.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          title: 'Saved',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-heart-empty" />,
        }}
      />
      <BottomTab.Screen
        name="Rewards"
        component={RewardsScreen}
        options={{
          title: 'Rewards',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="wallet-giftcard" type="MaterialCommunity"/>,
        }}
      />
      <BottomTab.Screen
        name="Health"
        component={HealthScreen}
        options={{
          title: 'Health',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="earth" type="MaterialCommunity"/>,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Recommended for You';
    case 'Saved':
      return 'Your Favourites';
    case 'Rewards':
      return 'Your Rewards';
    case 'Health':
        return 'Your Progress';
  }
}
