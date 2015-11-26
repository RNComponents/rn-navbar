// Module dependencies
var React = require('react-native');

var {
  Text,
  View,
  TouchableOpacity,
  PropTypes
} = React;

module.exports = React.createClass({

  propTypes: {
    title: PropTypes.string,
    backFunc: PropTypes.func,
    tintColor: PropTypes.string,
    titleTextColor: PropTypes.string,
    barTintColor: PropTypes.string,
    statusbarPadding: PropTypes.bool
  },

  getDefaultProps () {
    return {
      title: '标题',
      backFunc () { console.log('press back'); },
      tintColor: '#777',
      titleTextColor: '#333',
      barTintColor: 'white',
      statusbarPadding: false
    }
  },

  componentWillMount () {

  },

  render () {
    return (
      <View style={
          [styles.navbar,
            {backgroundColor:this.props.barTintColor},
            this.props.statusbarPadding ? {paddingTop: 30}:{}]}>
        <TouchableOpacity style={styles.iconWrapper} onPress={this.props.backFunc}>
          <View style={[styles.icon, {borderColor:this.props.tintColor}]} />
        </TouchableOpacity>
        <Text style={[styles.title, {color:this.props.titleTextColor}]}>{this.props.title}</Text>
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
