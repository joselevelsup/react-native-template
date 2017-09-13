import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Layout from "./app/app.js";

export default class myApp extends Component {
  render() {
    return (
      <Layout/>
    );
  }
}

AppRegistry.registerComponent('myApp', () => myApp);
