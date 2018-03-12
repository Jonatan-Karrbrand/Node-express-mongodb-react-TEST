var React = require('react');

var messsages = [];
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
      <Chattext></Chattext>
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
}
class Chattext extends React.Component {
  constructor() {
    super();
    this.state = {
      message: []
    };
  }
  render() {

    return <ul>
            {this.state.message.map(function (value) { return <li key={"hej"}>{value}</li>; })}
          </ul>
    }
    componentDidMount() {
      fetch('http://localhost:3000/messages').then(response =>
        response.json()).then(result => {
          console.log(result);
          console.log(result.length)
          for (var i = 0; i < result.length; i++) {
            messsages.push(result[i].messages)
            this.setState({
              message: messsages
            })
          }
          console.log(messsages)
        });
      }
}

module.exports = Chatt;
