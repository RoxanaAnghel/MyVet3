import React, {
  Component
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  ListView,
  Button,
  Alert,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation'

import {
  Tabs,
  Tab,
  Icon,
  FormLabel,
  FormInput,
  TextInput
} from 'react-native-elements'

var Mailer = require('NativeModules').RNMail;

//TODO: Investigate why it doesn't works with separate file
// var Dashboard = require('./Dashboard');

const Router = createRouter(() => ({
  dashboard: () => DashboardScreen,
  petlist: () => PetListScreen,
  contact: () => ContactScreen,
}));

class MyVetApp extends React.Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('dashboard')} />
      </NavigationProvider>
    );
  }
}

class DashboardScreen extends React.Component {

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

class PetListScreen extends React.Component {

  static route = {
    navigationBar: {
      title: 'Pets',
    }
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text>Pet list here</Text>
      </View>
    )
  }
  // _goToPetList = () => {
  //   this.props.navigator.push(Router.getRoute('petlist'));
  // }
}

class ContactScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { name: 'Your name', address: 'Your address', message: 'Your message' };
  }
  static route = {
    navigationBar: {
      title: 'Contact',
    }
  }
  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <FormLabel>Name</FormLabel>
          <FormInput ref='forminput' textInputRef='name' inputStyle={{height: 80, width: 300}} onChangeText={(name) => this.setState({name})} value={this.state.name} />
          <FormLabel>Address</FormLabel>
          <FormInput ref='forminput' textInputRef='address' inputStyle={{height: 80, width: 300}} onChangeText={(address) => this.setState({address})} value={this.state.address} />
          <FormLabel>Message</FormLabel>
          <FormInput ref='forminput' textInputRef='message'  multiline = {true} inputStyle={{height: 180, width: 300}} onChangeText={(message) => this.setState({message})} value={this.state.message} />
          <Button large onPress={this.sendEmail.bind()} large icon={{name: 'squirrel', type: 'octicon' }} title='SEND' />
      </View>
    )
  }
  sendEmail = () => {
    Mailer.mail({
      subject: 'Message from MyVet Android app',
      recipients: ['alex.szilagyi@gmail.com'],
      ccRecipients: ['alex.szilagyi@gmail.com'],
      bccRecipients: ['alex.szilagyi@gmail.com'],
      body: this.refs.forminput.refs.message
    }, (error, event) => {
        if(error) {

        }
    });
  }
  // _goToContact = () => {
  //   this.props.navigator.push(Router.getRoute('petlist'));
  // }
}

AppRegistry.registerComponent('MyVet', () => MyVetApp);
