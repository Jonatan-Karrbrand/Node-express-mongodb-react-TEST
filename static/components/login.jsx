var React = require('react');

class LoginComponent extends React.Component {
	render(){

		var inputUsername = <input onChange={function(){
		console.log(this.state)}} type="text"></input>;
		var inputPassword = <input type="password"></input>;
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
