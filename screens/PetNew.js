import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import mixin from 'react-mixin'
import Subscribable from 'Subscribable'


function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

class PetNew extends React.Component {

  constructor (props) {
    super(props)
    this.onSave = this.onSave.bind(this)
  }

  componentDidMount () {
    this.addListenerOn(this.props.navEvents, 'save', this.onSave)
  }

  onSave () {

    var pet = {};
    pet.name = guid();
    pet.age = "3";
    pet.petType = "dog";
    pet.weight = "5.50";
    pet.birthday = new Date("October 7, 2013 13:13:00");
    this.props.store.add(pet)
    this.props.navigator.pop()
  }

  render () {
    return <View style={styles.container}>
        <Text>Pet name: {this.props.pet && this.props.pet.name || '-'}</Text>
        <Text>Pet age: {this.props.pet && this.props.pet.age || '-'}</Text>
        <Text>Pet petType: {this.props.pet && this.props.pet.petType || '-'}</Text>
        <Text>Pet weigth: {this.props.pet && this.props.pet.weight || '-'}</Text>
        <Text>Pet birthday: {this.props.pet && this.props.pet.birthday || new Date().toString() }</Text>
      </View>
  }
}

mixin(PetNew.prototype, Subscribable.Mixin)

const styles = StyleSheet.create({
  container: {
    paddingTop: 64,
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

module.exports = PetNew;
