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
  Navigator,
  ListView,
  Button,
  Alert
} from 'react-native';


import PetList from './petList.js';


const routes=[
  {
    title:'Pets',
    index:0
  }
]


const onButtonPress=()=>{
    Alert.alert('add a pet not implemented');
}

export default class AwesomeProject2 extends Component {
  render() {
    return (
        <View>
        <Text> Welcome </Text>
      
        <PetList> </PetList>

        <Button
            onPress={onButtonPress}
            title="Add buton"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
/>

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


AppRegistry.registerComponent('AwesomeProject2', () => AwesomeProject2);
