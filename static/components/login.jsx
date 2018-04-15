var React = require('react');
var Chatt = require('./chatt2.jsx');
var PrivateChatt = require('./privateChatt.jsx');
var resultat;

class LoginComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      usernameInput: '',
      isLoggedIn: false
    }
  }
  render() {
    return <div>
      <h1>Chatt</h1>
      {
        !this.state.isLoggedIn
          ? <div>
              <h2>Write username</h2>
              <input onChange={event => this.setState({usernameInput: event.target.value})}></input>
              <input value="Register" type='button' onClick={() => fetch('/userinfo', {
                  body: '{"userName":"' + this.state.usernameInput + '"}',
                  headers: {
                    "Content-Type": "application/json"
                  },
                  method: 'POST'
                }).then(function(response) {
                  return response.json();
                }).then(function(result) {
                  resultat = result.ops[0];
                  console.log(resultat)
                  this.setState({isLoggedIn: true, usernameInput: this.state.usernameInput});
                }.bind(this))}></input>

              {/* Logga in*/}
                <input value="Login" type='button' onClick={ () =>
                  fetch('http://localhost:3000/userinfo/' + this.state.usernameInput).then(response => response.json()).then(result => {
                    resultat = result[0];
                    console.log(resultat)
                    this.setState({isLoggedIn: true, usernameInput: this.state.usernameInput});
                  })}></input>
              </div>
          : <div>
              <Chatt username={this.state.usernameInput}></Chatt>
              <PrivateChatt userInfo={resultat}></PrivateChatt>
            </div>
      }
    </div>
  }
}

module.exports = LoginComponent;
