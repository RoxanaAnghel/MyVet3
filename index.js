import React, {
  Component
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  View,
  Navigator,
  Button,
  Alert,
  Image,
  RecyclerViewBackedScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

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

import store from './database/PetStore'
import Emitter from 'EventEmitter'

const Realm = require('realm');
const navEvents = new Emitter()

import Dashboard from './screens/Dashboard'
import PetList from './screens/PetList'
import PetDetail from './screens/PetDetail'
import PetNew from './screens/PetNew'
import PetEdit from './screens/PetEdit'
import Contact from './screens/Contact'

class MyVetApp extends React.Component {
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{ id: 'home', title: 'Home', props: { navEvents } }}
        renderScene={this.navigatorRenderScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={styles.navBar}
          />
        }
        />
    );
  }

  navigatorRenderScene (route, navigator) {
    switch (route.id) {
      case 'home':
        return <Dashboard navigator={navigator}
                       store={store}
                       {...route.props}
                       />
       case 'petList':
         return <PetList navigator={navigator}
                        store={store}
                        {...route.props}
                        />
       case 'petDetail':
         return <PetDetail navigator={navigator}
                       store={store}
                       {...route.props}
                       />
       case 'petEdit':
         return <PetEdit navigator={navigator}
                       store={store}
                       {...route.props}
                       />
      case 'petNew':
         return <PetNew navigator={navigator}
                       store={store}
                       {...route.props}
                       />
      case 'contact':
        return <Contact navigator={navigator}
                       store={store}
                       {...route.props}
                       />
    }
  }
}

const NavigationBarRouteMapper = {
  LeftButton (route, navigator, index, navState) {
    if (index === 0) {
      return null
    }
    var previousRoute = navState.routeStack[index - 1]
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          {previousRoute.title}
        </Text>
      </TouchableOpacity>
    )
  },

  RightButton (route, navigator, index, navState) {
    switch (route.id) {
      case 'petList':
          if (route.props.pet) {
               return <View/>
          }
        return (
          <TouchableOpacity
            onPress={() => navigator.push({id: 'petNew', title:'New', props:{ navEvents }}) }
            style={styles.navBarRightButton}>
            <Text style={[styles.navBarText, styles.navBarButtonText]}>
              Add
            </Text>
          </TouchableOpacity>
        )
      case 'petNew':
        if (route.props.pet) {
          return <View/>
        }
        return (
          <TouchableOpacity
            onPress={() => route.props.navEvents.emit('save')}
            style={styles.navBarRightButton}>
            <Text style={[styles.navBarText, styles.navBarButtonText]}>
              Save
            </Text>
          </TouchableOpacity>
        )
        case 'petDetail':
          if (route.props.pet) {
            return <View/>
          }
          return (
            <TouchableOpacity
              onPress={() => route.props.navEvents.emit('edit')}
              style={styles.navBarRightButton}>
              <Text style={[styles.navBarText, styles.navBarButtonText]}>
                Edit
              </Text>
            </TouchableOpacity>
          )
    }
  },

  Title (route, navigator, index, navState) {
    return <Text style={[styles.navBarText, styles.navBarTitleText]}>{route.title}</Text>
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'white'
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10
  },
  navBarTitleText: {
    color: '#000',
    fontWeight: '500',
    marginVertical: 9,
    marginRight: 10,
    marginLeft: 10
  },
  navBarLeftButton: {
    paddingLeft: 10
  },
  navBarRightButton: {
    paddingRight: 10
  },
  navBarButtonText: {
    color: '#4F8EF7'
  }
})

AppRegistry.registerComponent('MyVet', () => MyVetApp);
