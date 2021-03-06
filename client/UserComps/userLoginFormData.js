/* 
Index
  UserAuth
  UserApp
    UserLoginFormData
      UserLoginForm
*/


var React = require('react');
var UserLoginForm = require('./UserLoginForm');

var UserLoginFormData = React.createClass({
  getInitialState: function(){
    return{
      email: null,
      password: null,
      username: null,
    }
  },
  contextTypes: {
    sendNotification: React.PropTypes.func.isRequired,
    logIn: React.PropTypes.func.isRequired,
    signUp: React.PropTypes.func.isRequired
  },
  onEmailChange: function(event){
    this.setState({ email: event.target.value })
  },
  onPasswordChange: function(event){
    this.setState({ password: event.target.value })
  },
  onUserNameChange: function(event){
    this.setState({ username: event.target.value })
  },

  submitUserToServer: function(e){
    const {setActiveComponent} = this.props
    const {email, password, username} = this.state;
    const {logIn, signUp} = this.context;

    e.preventDefault();

    const promise = this.props.login ? logIn(email, password) : signUp(email, password, username);
    promise.done(() => setActiveComponent('home'));
},
 
  render: function(){
    return(
            <UserLoginForm
            login = { this.props.login }
            onUserNameChange = { this.onUserNameChange }
            submitUserToServer = { this.submitUserToServer }
            onEmailChange = { this.onEmailChange }
            onPasswordChange = { this.onPasswordChange} />
          )
      }
});

module.exports = UserLoginFormData;