var React = require('react');

class LoginComponent extends React.Component {
	render(){
		var inputUsername = <input onChange={function(){
					var v
					console.log(this.state)}} type="text"></input>;
		var inputPassword = <input type="password"></input>;
		var button = <button>Logga in</button>;
		return <div id="login-container">
			<h2>Logga in</h2>
				<div id="inputs-container">
					<form>
					{inputUsername}
					{inputPassword}
					</form>
				</div>
		</div>
	}
}

module.exports = LoginComponent;
