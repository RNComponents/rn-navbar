rn-navbar
---

Simple navbar component for react-native.

## Install

```
npm i rn-navbar --save
```

## Usage

```
var NavBar = require('rn-navbar');

<NavBar title="RNComponents" backFunc={()=>{this.props.navigator.pop()}} />
```

## Props

- title: navbar title
- backFunc: back function
- tintColor: color of the button of the navbar
- titleTextColor: title color of the navbar
- barTintColor: background color of the navbar

## License

The MIT License
