import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';

import Subscribable from 'Subscribable'
import mixin from 'react-mixin'
import DatePicker from 'react-native-datepicker'
import NumericInput from 'react-numeric-input'

import {
  Button,
  Tabs,
  Tab,
  Icon,
  FormLabel,
  FormInput,
  List,
  ListItem,
} from 'react-native-elements'

class PetEdit extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      petName: this.props.pet.name,
      petId: this.props.pet.id,
      petAge: this.props.pet.age,
      petType: this.props.pet.petType,
      petWeight: this.props.pet.weight,
      petBirthday: this.props.pet.birthday
    };
  }

  _saveChanges = () => {
    var pet = {};
    pet.id = this.state.petId;
    pet.name = this.state.petName;
    pet.age = this.state.petAge;
    pet.petType = this.state.petType;
    pet.weight = this.state.petWeight;
    pet.birthday = this.state.petBirthday;
    this.props.store.edit(pet);
    this.props.navigator.pop();
  }

  render () {
    return (<View style={styles.container}>
        <Button large="true" iconLeft raised icon={{name: 'done'}} title='SAVE' onPress={this._saveChanges} />
        <FormLabel>Pet name</FormLabel>
        <FormInput ref='forminput' textInputRef='petName' inputStyle={{height: 80, width: 300}} onChangeText={(petName) => this.setState({petName})} value={this.state.petName} />
        <FormLabel>Pet age</FormLabel>
        <FormInput ref='forminput' textInputRef='petAge' inputStyle={{height: 80, width: 300}} onChangeText={(petAge) => this.setState({petAge})} value={this.state.petAge} />
        <FormLabel>Pet petType</FormLabel>
        <FormInput ref='forminput' textInputRef='petType' inputStyle={{height: 80, width: 300}} onChangeText={(petType) => this.setState({petType})} value={this.state.petType} />
        <FormLabel>Pet weight</FormLabel>
        <FormInput ref='forminput' textInputRef='petWeight' inputStyle={{height: 80, width: 300}} onChangeText={(petWeight) => this.setState({petWeight})} value={this.state.petWeight} />
        <FormLabel>Pet birthday</FormLabel>
        <DatePicker
        style={{width: 200}}
        date={this.state.petBirthday}
        mode="date"
        placeholder="select birthday"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2050-01-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={(petBirthday) => {this.setState({petBirthday})}}
      />
      </View>)
  }
}

mixin(PetEdit.prototype, Subscribable.Mixin)

const styles = StyleSheet.create({
  container: {
    paddingTop: 64,
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

module.exports = PetEdit;
