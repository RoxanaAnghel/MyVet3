import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import mixin from 'react-mixin'
import Subscribable from 'Subscribable'

class PetNew extends React.Component {

  constructor (props) {
    super(props)
    this.onSave = this.onSave.bind(this)
  }

  componentDidMount () {
    this.addListenerOn(this.props.navEvents, 'save', this.onSave)
  }

  onSave () {
    this.props.store.add(new Date().toLocaleTimeString())
    this.props.navigator.pop()
  }

  render () {
    return <View style={styles.container}><Text>{this.props.pet || new Date().toString()}</Text></View>
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
