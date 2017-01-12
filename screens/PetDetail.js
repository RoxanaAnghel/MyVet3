import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import mixin from 'react-mixin'
import Subscribable from 'Subscribable'

class PetDetail extends React.Component {

    constructor (props) {
      super(props)
    }

    render () {
      return <View style={styles.container}><Text>{this.props.item || new Date().toString()}</Text></View>
    }
}

mixin(PetDetail.prototype, Subscribable.Mixin)

const styles = StyleSheet.create({
  container: {
    paddingTop: 64,
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

module.exports = PetDetail;
