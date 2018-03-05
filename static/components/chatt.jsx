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
      <input onChange={function(event){
          this.setState({text: event.target.value})
        }} value={this.state.text}></input>

      <button onClick={function() {

        }}></button>
    </div>
  }
}

module.exports = Chatt;
