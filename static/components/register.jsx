var React = require('react');

class Register extends React.Component {
	render(){
		return <div id="register-container">
      <h2>Registrering</h2>
      <div id="register-mail">
        <p>E-post:</p>
        <input type="text"></input>
      </div>
      <div id="register-name">
        <p>Namn:</p>
        <input type="text" onChange={ function(event){ console.log(event.target.value)}}></input>
      </div>
      <div id="register-passwords">
        <p>Lösenord:</p>
        <input type="password" onChange={ function(event){ console.log(event.target.value)}}></input>
      </div>
      <input type="button" value="Registrera"></input>
    </div>
	}
}

module.exports = Register;
