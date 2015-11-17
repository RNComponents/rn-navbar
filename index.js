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
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.iconWrapper} onPress={this.props.backFunc}>
          <View style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    )
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
    borderColor: '#777',
    transform: [{rotate:'45deg'}]
  },

  title: {
    fontSize: 18,
    color: '#666666',
    textAlign: 'center'
  }
});
