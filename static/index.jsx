var React = require('react');
var ReactDOM = require('react-dom');
/*var HelloWorld = require('./components/helloworld.jsx');*/
var LoginComponent = require('./components/login.jsx');
var ChattComponent = require('./components/chatt.jsx');
<<<<<<< HEAD
var RegisterComponent = require('./components/register.jsx');
=======

>>>>>>> b2d3317e1bb18f81aced89e88a52290a989c768f

ReactDOM.render(<div>
    <LoginComponent></LoginComponent>
    <RegisterComponent></RegisterComponent>
    <ChattComponent></ChattComponent>
  </div>
  ,document.getElementById('app'));
