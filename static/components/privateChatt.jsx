var React = require('react');
var PropTypes = require('prop-types');
var currentUserId;
var currentUserName;

// Main private chatt component
class PrivateChattComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }
  render() {
    return <div>
      <h3>Logged in as: {this.props.userInfo.userName}</h3>
      <h4>Add friend</h4>
      <UsersComponent></UsersComponent>
      <FriendsComponent></FriendsComponent>
    </div>
  }
  componentDidMount() {
    currentUserId = this.props.userInfo._id;
    currentUserName = this.props.userInfo.userName;
  }
}

// Show users and add friends
class UsersComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      messageBox: [],
      messages: [],
      currentFriendToAdd: ''
    };
  }
  render() {
    return <div id="chattBox">
      <ul>
        {
          this.state.messageBox.map(function(value) {
            return <li value={value._id} onClick={() => addFriend(value._id, value.userName)} key={value._id}>{value.userName}</li>;
          })
        }
      </ul>
    </div>
  }
  componentDidMount() {
    fetch('http://localhost:3000/userinfo').then(response => response.json()).then(result => {
      this.setState({messages: []})
      for (var i = 0; i < result.length; i++) {
        this.state.messages.push(result[i])
      }
      this.setState({messageBox: this.state.messages})
    });
  }
}
function addFriend(userId, userName) {
  fetch('http://localhost:3000/userinfo/' + currentUserId + '/update-friends', {
    body: JSON.stringify({userName: userName, userId: userId}),
    headers: {
      "Content-Type": "application/json"
    },
    method: 'POST'
  }).then(function(response) {
    return response.json();
  }).then(function(result) {
    console.log(result)
  })

  getAdded(userId);

  function getAdded(otherId) {
    fetch('http://localhost:3000/userinfo/' + otherId + '/get-added', {
      body: JSON.stringify({userName: currentUserName, userId: currentUserId}),
      headers: {
        "Content-Type": "application/json"
      },
      method: 'POST'
    }).then(function(response) {
      return response.json();
    }).then(function(result) {
      console.log(result)
    })
  }
}

// Friends component
class FriendsComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUsersFriends: [],
      friend: [],
      chattWith: [],
      writeText: 'tjena'
    }
  }
  render() {
    return <div>
      <h4>My friends</h4>
      <ul>
        {this.state.currentUsersFriends.map( value => {
          return <li onClick={() => chattWith(value[0], value[1])}key={value[0]}>{value[0]}</li>
        }
        )}
      </ul>
    </div>
  }
  componentDidMount() {
    setInterval(function() {
      fetch('http://localhost:3000/userinfo/' + currentUserId + '/friends').then(response => response.json()).then(result => {
        this.setState({friend: []})
        result[0].friends.map(function(value) {
          this.state.friend.push([value.userName , value.userId])
        }.bind(this))
        this.setState({currentUsersFriends: this.state.friend})
      });
    }.bind(this), 5000),

    setInterval(function() {
      fetch('http://localhost:3000/con/' + currentUserId + '/conversations').then(response => response.json()).then(result => {
        console.log(result[0].conversations[0])
      });
    }.bind(this), 5000)
  }
}

function chattWith(otherName, otherId) {
  console.log(otherName + ' ' + otherId)
  fetch('http://localhost:3000/userinfo/' + currentUserId + '/conversations' , {
    body: JSON.stringify({userName: otherName, userId: otherId}),
    headers: {
      "Content-Type": "application/json"
    },
    method: 'POST'
  }).then(function(response) {
    return response.json();
  }).then(function(result) {
    console.log(result)
  })

  addOnOtherSide()

  function addOnOtherSide() {
    fetch('http://localhost:3000/userinfo/' + otherId + '/conversations2' , {
      body: JSON.stringify({userName: currentUserName, userId: currentUserId}),
      headers: {
        "Content-Type": "application/json"
      },
      method: 'POST'
    }).then(function(response) {
      return response.json();
    }).then(function(result) {
      console.log(result)
    })
  }
}

PrivateChattComponent.propTypes = {
  userInfo: PropTypes.object
}

module.exports = PrivateChattComponent;
