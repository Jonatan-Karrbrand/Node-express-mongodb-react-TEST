var React = require('react');

class LoginComponent extends React.Component {
	render(){


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
