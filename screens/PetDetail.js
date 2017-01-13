import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { Button } from 'react-native-elements'

import mixin from 'react-mixin'
import Subscribable from 'Subscribable'

class PetDetail extends React.Component {

    constructor (props) {
      super(props)
    }

    _goToEditMode = () => {
      this.props.navigator.push({
          id: 'petEdit',
          props: this.props
      });
    }

    render () {
      return (<View style={styles.container}>
        <Button large="true" iconLeft raised icon={{name: 'mode-edit'}} title='EDIT' onPress={this._goToEditMode} />
        <Text>Pet name: {this.props.pet.name || '-' }</Text>
        <Text>Pet age: {this.props.pet.age || 0 }</Text>
        <Text>Pet type: {this.props.pet.petType || '-' }</Text>
        <Text>Pet weight: {this.props.pet.weight || 0.00 }</Text>
        <Text>Pet birthday: {this.props.pet.birthday.toISOString()}</Text>
      </View>)
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
