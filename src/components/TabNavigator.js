import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { ProfileScreen, ProfileStack } from './ProfileScreen.js';
import DiscoverScreen from './DiscoverScreen.js';
import SavedScreen from './SavedScreen.js';
import InboxScreen from './InboxScreen.js';
import ToysScreen from './ToysScreen.js';
import ToyCreateScreen from './ToyCreateScreen.js';
import ToysListedScreen from './ToysListedScreen.js';
import { Ionicons } from '@expo/vector-icons';




const NavBar = TabNavigator(
  {
    Discover: { screen: DiscoverScreen },
    Saved: { screen: SavedScreen },
    Toys: { screen: ToysScreen },
    Inbox: { screen: InboxScreen },
    Profile: { screen: ProfileStack },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Discover') {
          iconName = `ios-search${focused ? '' : '-outline'}`;
        } else if (routeName === 'Saved') {
          iconName = `ios-heart${focused ? '' : '-outline'}`;
        } else if (routeName === 'Inbox') {
          iconName = `ios-chatbubbles${focused ? '' : '-outline'}`;
        } else if (routeName === 'Toys') {
          iconName = `ios-boat${focused ? '' : '-outline'}`;
        } else if (routeName === 'Profile') {
          iconName = `ios-contact${focused ? '' : '-outline'}`;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);

export default NavBar;
