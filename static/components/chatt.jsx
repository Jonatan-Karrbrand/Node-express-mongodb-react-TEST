var React = require('react');

class Chatt extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }
  render() {
    return <div>
      <p>{this.state.text}</p>
      <input onChange={event => this.setState({text: event.target.value})}></input>

      <button onClick={() => fetch('http://localhost:3000/messages', {
        body: '{"messages":"' + this.state.text + '"}',
        headers: {
          "Content-Type": "application/json"
        },
        method: 'POST'
      }).then(function(response) {
        console.log(response)
        return response.json();
      }).then(function(result) {
        console.log(result)
      }),
      () => {
        alert('skitbra ')
      }}>Send</button>
    </div>
  }
}

module.exports = Chatt;
