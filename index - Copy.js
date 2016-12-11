/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

const routes=[
  {
    title:'Pets',
    index:0
  }
]
class Pet extends Component{
  constructor(){
    super()
  }
  render(){
    return (
      <View style={styles.container}>
      </View>
      );
  }
}

var pets =['Puppy']

export default class AwesomeProject2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to MyVet!
        </Text>
        <Text style={styles.instructions}>
          Hello
        </Text>
        <Text style={styles.instructions}>
            {pets[0]},{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject2', () => AwesomeProject2);
