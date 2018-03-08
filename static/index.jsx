var React = require('react');
var ReactDOM = require('react-dom');
/*var HelloWorld = require('./components/helloworld.jsx');*/
var LoginComponent = require('./components/login.jsx');
var ChattComponent = require('./components/chatt.jsx');
var RegisterComponent = require('./components/register.jsx');

ReactDOM.render(<div>
    <LoginComponent></LoginComponent>
    <RegisterComponent></RegisterComponent>
    <ChattComponent></ChattComponent>
  </div>
  ,document.getElementById('app'));
