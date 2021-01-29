import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Discover from './src/Screens/Discover';
import Notes from './src/Screens/Notes';
import Matches from './src/Screens/Matches';
import Profile from './src/Screens/Notes';

function Badge(props) {
  var count = props.count;
  if (count < 1) return null;
  if (count > 50) count = '50+';

  return (
    <View style={{ minWidth: 18, height: 16, backgroundColor: '#8C5CFB', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
      <Text style={{ fontSize: 12, marginHorizontal: 5, fontFamily: 'Gilroy-SemiBold', color: '#fff' }}>{count}</Text>
    </View>
  )
}

const TabNavigator = createBottomTabNavigator({
  Discover: {
    screen: Discover,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Image style={{ tintColor: tintColor }} source={require('./src/Assets/discover/discover.png')} />
    }
  },
  Notes: {
    screen: Notes,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <>
        <Image style={{ tintColor: tintColor }} source={require('./src/Assets/notes/notes.png')} />
        <View style={{ position: 'absolute', top: 2, right: 22, }}>
          <Badge count={9} />
        </View>
      </>
    }
  },
  Matches: {
    screen: Matches,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <>
        <Image style={{ tintColor: tintColor }} source={require('./src/Assets/matches/matches.png')} />
        <View style={{ position: 'absolute', top: 2, right: 22 }}>
          <Badge count={60} />
        </View>
      </>
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Image style={{ tintColor: tintColor }} source={require('./src/Assets/profile/profile.png')} />
    }
  }
}, {
  tabBarOptions: {
    labelStyle: {
      fontFamily: 'Gilroy-SemiBold',
      textTransform: 'capitalize',
    },
    activeTintColor: '#000',
    inactiveTintColor: '#9B9B9B',
    style: {
      backgroundColor: '#FFF',
      borderTopWidth: StyleSheet.hairlineWidth
    }
  }
});

export default createAppContainer(TabNavigator);