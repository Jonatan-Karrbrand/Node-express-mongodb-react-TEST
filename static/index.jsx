var React = require('react');
var ReactDOM = require('react-dom');
/*var HelloWorld = require('./components/helloworld.jsx');*/
var LoginComponent = require('./components/login.jsx');
var Register = require('./components/register.jsx');

ReactDOM.render(<div><LoginComponent></LoginComponent><Register></Register></div>, document.getElementById('app'));
