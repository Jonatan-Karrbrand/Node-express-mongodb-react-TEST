var React = require('react');

class Chatt extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      message: ""
    };
  }
  render() {
    return <div>
      <p>{this.state.message}</p>
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
        })}>Send</button>
    </div>
  }
  componentDidMount() {
    fetch('http://localhost:3000/messages').then(response =>
    response.json()).then(result => {
      console.log(result);
      var messsages = [];
      console.log(result.length)
      for (var i = 0; i < result.length; i++) {
        messsages.push(result[i].messages)
      }
      console.log(messsages)
      this.setState({
        message: messsages.map()
      });
      console.log(result.message)
    });
  }
}

module.exports = Chatt;
