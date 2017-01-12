'use strict'

import Emitter from 'EventEmitter'

class PetStore {
  constructor () {
    this.pets = []
    this.events = new Emitter()
  }

  state () {
    return {
      pets: this.pets
    }
  }

  add (pet) {
    this.pets = [...this.pets, pet]
    this.publish()
  }

  remove (pet) {
    this.pets = this.pets.filter((x) => x !== pet)
    this.publish()
  }

  publish (event, ...args) {
    this.events.emit('update')
  }
}
const store = new PetStore()

export default store
