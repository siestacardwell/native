import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import ToyCreateScreen from './ToyCreateScreen';

export class ProfileScreen extends Component {
    render() {
      return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Profile Screen</Text>
          <Button
            title="List a Toy"
            onPress={() => this.props.navigation.navigate('ToyCreate')}
          />
        </View>
      );
    }
}

export const ProfileStack = StackNavigator({
  Profile: { screen: ProfileScreen },
  ToyCreate: { screen: ToyCreateScreen },
})
