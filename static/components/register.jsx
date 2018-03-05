var React = require('react');

class Register extends React.Component {
	render(){
		return <div>
      <h1>Registrering</h1>
      <div className="regname">
        <p>Namn:</p>
        <input type="text"></input>
      </div>
      <div className="regpassword">
        <p>Lösenord:</p>
        <input type="text"></input>
      </div>
      <div className="regmail">
        <p>E-post:</p>
        <input type="text"></input>
      </div>
    </div>
	}
}

module.exports = Register;
