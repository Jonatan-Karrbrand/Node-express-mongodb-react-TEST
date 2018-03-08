var React = require('react');

class LoginComponent extends React.Component {
	render(){
<<<<<<< HEAD
		var inputUsername = <input onChange={function(){
					console.log(this.state)}} type="text"></input>;
		var inputPassword = <input type="password"></input>;
=======

>>>>>>> 24de463f1da1280b02eae8d4edc19bb263c5320b
		var button = <button>Logga in</button>;
		return <div id="login-container">
			<h2>Logga in</h2>
				<div>
					<form id="inputs-container">
					<input onChange={function(event){console.log(event.target.value);}}></input>
					<input type="password"></input>;
					</form>
				</div>
		</div>
	}
}

module.exports = LoginComponent;
