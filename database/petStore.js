'use strict'

import Emitter from 'EventEmitter'

const Realm = require('realm');

const PetSchema = {
  name: 'Pet',
  properties: {
    name: 'string',
    age: 'string',
    petType: 'string',
    weight: 'string',
    birthday: 'date',
  }
}

class PetStore {
  constructor () {
    let realm = new Realm({schema: [PetSchema]});
    this.pets = realm.objects('Pet')
    this.events = new Emitter()
  }

  state () {
    return {
      pets: this.pets
    }
  }

  add (pet) {
      let realm = new Realm({schema: [PetSchema]});
      realm.write(() => {
        realm.create('Pet', pet);
      })
      this.publish()
  }

  edit (pet) {
    let realm = new Realm({schema: [PetSchema]});
    let petToUpdate = realm.objects('Pet').find(row=>{
      return row.name==pet.name
    })

    realm.write(() => {
      realm.create('Pet', pet);
    });

    this.publish()
  }

  remove (pet) {
    let realm = new Realm({schema: [PetSchema]});
    let petToRemove = realm.objects('Pet').find(row=>{
      return row.name==pet.name
    })

    realm.write(()=>{
      realm.delete(petToRemove)
    })
    this.publish()
  }

  publish (event, ...args) {
    this.events.emit('update')
  }
}

const store = new PetStore()

export default store
