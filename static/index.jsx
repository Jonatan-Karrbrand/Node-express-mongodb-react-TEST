var React = require('react');
var ReactDOM = require('react-dom');
/*var HelloWorld = require('./components/helloworld.jsx');*/
var LoginComponent = require('./components/login.jsx');
<<<<<<< HEAD
var Register = require('./components/register.jsx');

ReactDOM.render(<div><LoginComponent></LoginComponent><Register></Register></div>, document.getElementById('app'));
=======
var ChattComponent = require('./components/chatt.jsx');


ReactDOM.render(<div>
    <LoginComponent></LoginComponent>
    <ChattComponent></ChattComponent>
  </div>
  ,document.getElementById('app'));
>>>>>>> 24de463f1da1280b02eae8d4edc19bb263c5320b
