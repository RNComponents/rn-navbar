// Module dependencies
var React = require('react-native');

var {
  Text,
  View,
  TouchableOpacity
} = React;

module.exports = React.createClass({

  componentWillMount () {
    if (!this.props.title) console.log('Component should pass `title` property');
    if (!this.props.backFunc) console.log('Component should pass `backFunc` property');
  },

  render () {
    return (
      <View style={[styles.navbar, {backgroundColor:this.props.barTintColor || 'white'}]}>
        <TouchableOpacity style={styles.iconWrapper} onPress={this.props.backFunc}>
          <View style={[styles.icon, {borderColor:this.props.tintColor || '#777'}]} />
        </TouchableOpacity>
        <Text style={[styles.title, {color:this.props.titleTextColor || '#333'}]}>{this.props.title}</Text>
      </View>
    );
  }
});

var styles = React.StyleSheet.create({
  navbar: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#cecece',
    borderBottomWidth: 1,
    paddingVertical: 10
  },

  iconWrapper: {
    position: 'absolute',
    left: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  icon: {
    width: 14,
    height: 14,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    transform: [{rotate:'45deg'}]
  },

  title: {
    fontSize: 18,
    textAlign: 'center'
  }
});
