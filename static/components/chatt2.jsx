var React = require('react');
var PropTypes = require('prop-types');

class ChattComponent extends React.Component {
    render() {
      return <div>
        <p>{this.props.username}</p>
        <Chattext></Chattext>
        <input onChange={event => this.setState({text: event.target.value})}></input>

        <button onClick={() => fetch('http://localhost:3000/messages', {
          body: JSON.stringify({messages: this.state.text, user: this.props.username}),
          headers: {
            "Content-Type": "application/json"
          },
          method: 'POST'
        }).then(function(response) {
          console.log(response)
          return response.json();
        }).then(function(result) {
          console.log(result)
        })}>Send</button>
      </div>
	}
}

class Chattext extends React.Component {
  constructor() {
    super();
    this.state = {
      messageBox: [],
      messages: []
    };
  }
  render() {
    return <div id="chattBox">
      <ul>
        {this.state.messageBox.map(function(value) {
          return <li key={value._id}>{value.messages} <span id="userName">-{value.user}</span></li>;
        })}
      </ul>
    </div>
  }
  componentDidMount() {
    setInterval(function () {
      fetch('http://localhost:3000/messages').then(response => response.json()).then(result => {
        this.setState({messages: []})
        for (var i = 0; i < result.length; i++) {
          this.state.messages.push(result[i])
        }
        this.setState({messageBox: this.state.messages})
      });
    }.bind(this), 3000)
  }
}

ChattComponent.propTypes = {
  username : PropTypes.string
}

module.exports = ChattComponent;
