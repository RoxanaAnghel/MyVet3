import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';

var Dashboard = require('./Dashboard');

const Router = createRouter(() => ({
  home: () => Dashboard,
}));

class MyVetApp extends React.Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('home')} />
      </NavigationProvider>
    );
  }
}

AppRegistry.registerComponent('MyVet', () => MyVetApp);
