import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

import { Button } from 'react-native-elements'

import Subscribable from 'Subscribable'
import mixin from 'react-mixin'

class Dashboard extends React.Component {

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Image resizeMode="cover" source={require('./../img/AppLogo.png')} />
        <Button large="true" iconLeft raised icon={{name: 'pets'}} title='PET LIST' onPress={this._goToPetList} />
        <Button large="true" iconLeft raised icon={{name: 'contact-mail'}} onPress={this._goToContact} title='CONTACT' />
      </View>
    )
  }
  _goToPetList = () => {
    this.props.navigator.push({
        id: 'petList',
        props: {}
    });
  }
  _goToContact = () => {
    this.props.navigator.push({
        id: 'contact',
        props: {}
    });
  }
}

mixin(Dashboard.prototype, Subscribable.Mixin)

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingTop: 64,
    flex: 1
  }
})

module.exports = Dashboard;
