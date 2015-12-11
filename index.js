'use strict';

// Module dependencies
let React = require('react-native');
let styles = require('./styles');

let {
  Text,
  View,
  TouchableOpacity,
  PropTypes
} = React;

const STATUS_BAR_HEIGHT = 20;

module.exports = React.createClass({

  propTypes: {
    title: PropTypes.string,
    backFunc: PropTypes.func,
    tintColor: PropTypes.string,
    titleTextColor: PropTypes.string,
    barTintColor: PropTypes.string,
    actionName: PropTypes.string,
    actionFunc: PropTypes.func,
    actionTextColor: PropTypes.string,
    backIconHidden: PropTypes.bool,
    statusbarPadding: PropTypes.bool
  },

  getDefaultProps () {
    return {
      title: 'title',
      backFunc () { console.log('press back'); },
      tintColor: '#777',
      titleTextColor: '#333',
      barTintColor: 'white',
      actionName: '',
      actionFunc () {},
      actionTextColor: '#666',
      backIconHidden: false,
      statusbarPadding: true
    }
  },

  render () {
    return (
      <View style={
          [styles.navbar,
            {backgroundColor:this.props.barTintColor,height: this.props.statusbarPadding ? 59 : 39},
            this.props.statusbarPadding ? { paddingTop: STATUS_BAR_HEIGHT }:{}]}>
        {!this.props.backIconHidden ?
          <TouchableOpacity style={styles.iconWrapper} onPress={this.props.backFunc}>
            <View style={[styles.icon, {borderColor:this.props.tintColor}]} />
          </TouchableOpacity> : null}
        <Text style={[styles.title, {color:this.props.titleTextColor}]}>{this.props.title}</Text>
        {this.props.actionName ?
          <TouchableOpacity style={styles.actionBtn} onPress={this.props.actionFunc.bind(this)}>
            <Text style={[styles.actionName, { color: this.props.actionTextColor }]}>{this.props.actionName}</Text>
          </TouchableOpacity> : null}
      </View>
    );
  }
});
