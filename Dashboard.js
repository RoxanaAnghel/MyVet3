import React, {Component} from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';


class Dashboard extends MyVetApp {

  static route = {
    navigationBar: {
      title: 'Home',
    }
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Image resizeMode="cover" source={require('./img/AppLogo.png')} />
        <Button raised icon={{name: 'cached'}} title='PET LIST' onPress={this._goToPetList} />
        <Button raised icon={{name: 'cached'}} onPress={this._goToContact} title='CONTACT' />
      </View>
    )
  }
  _goToPetList = () => {
    this.props.navigator.push(Router.getRoute('petlist'));
  }
  _goToContact = () => {
    this.props.navigator.push(Router.getRoute('contact'));
  }
}

module.exports = Dashboard;
