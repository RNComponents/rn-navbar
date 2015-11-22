rn-navbar
---

Simple navbar component for react-native.

## Install

```
npm i rn-navbar --save
```

## Usage

```js
var React = require('react-native');
var NavBar = require('rn-navbar');

module.exports = React.createClass({
  render () {
    return (<NavBar title="RNComponents" backFunc={()=>{this.props.navigator.pop()}} />);
  }
});
```

## Props

- title: navbar title
- backFunc: back function
- tintColor: color of the button of the navbar
- titleTextColor: title color of the navbar
- barTintColor: background color of the navbar

## License

The MIT License
