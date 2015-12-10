/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var NavBar = require('rn-navbar');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var RNNavbar = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <NavBar actionName="Submit" actionFunc={()=>{console.log('act');}} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('RNNavbar', () => RNNavbar);
