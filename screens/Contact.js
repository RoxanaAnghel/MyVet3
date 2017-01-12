import React, {Component} from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

import Subscribable from 'Subscribable'
import mixin from 'react-mixin'

import {
  Button,
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

class Contact extends React.Component {

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
    let message=this.state.message;
    Mailer.mail({
      subject: 'Message from MyVet Android app',
      recipients: ['roxana.anghel11@gmail.com'],
      ccRecipients: ['roxana.anghel11@gmail.com'],
      bccRecipients: ['roxana.anghel11@gmail.com'],
      body: message,
      attachment: {
        path: '',  // The absolute path of the file from which to read data.
        type: '',   // Mime Type: jpg, png, doc, ppt, html, pdf
        name: '',   // Optional: Custom filename for attachment
      }
    }, (error, event) => {
        if(error) {
        }
    });
  }
}

mixin(Contact.prototype, Subscribable.Mixin)

module.exports = Contact;
