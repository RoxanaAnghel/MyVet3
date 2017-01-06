import React, {
  Component
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
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
  TextInput,
  List,
  ListItem,
} from 'react-native-elements'

var Mailer = require('NativeModules').RNMail;

//TODO: Investigate why it doesn't works with separate file
// var Dashboard = require('./Dashboard');

const Router = createRouter(() => ({
  dashboard: () => DashboardScreen,
  petlist: () => PetListScreen,
  contact: () => ContactScreen,
}));

const Realm = require('realm');

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

const PetSchema = {
  name: 'Pet',
  properties: {
    pets: {name: 'Pet', properties: {name: 'string', avatar_url: 'string', type: 'string'}},
  }
}

class PetListScreen extends React.Component {

  static route = {
    navigationBar: {
      title: 'Pets',
    }
  }

  render() {
    let realm = new Realm({
     schema: [{name: 'Pet', properties: {name: 'string', avatar_url: 'string', type: 'string'}}]
   });

   let pets = realm.objects('Pet')


    realm.write(() => {
      realm.create('Pet', {name: 'Puppy #8', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', type: 'Dog'});
    });

    return (
      <View style={{flex: 1}}>
      <List containerStyle={{marginBottom: 20}}>
        {
          pets.map((l, i) => (
            <ListItem
              roundAvatar
              avatar={{uri:l.avatar_url}}
              key={i}
              title={l.name}
            />
          ))
        }
      </List>
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
      <View style={{flex: 1}}>
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
      recipients: ['roxana.anghel11@gmail.com'],
      ccRecipients: ['roxana.anghel11@gmail.com'],
      bccRecipients: ['roxana.anghel11@gmail.com'],
      body: this.refs.forminput.refs.message
    }, (error, event) => {
        if(error) {

        }
    });
  }
}

AppRegistry.registerComponent('MyVet', () => MyVetApp);
