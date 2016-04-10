var React = require('react');

var UserAuth = React.createClass({
  getInitialState: function(){
    return{
      user: null
    }
  },
  propTypes: {
    children: React.PropTypes.node.isRequired
  },
  childContextTypes: {
      user: React.PropTypes.object,
      signUp: React.PropTypes.func,
      logIn: React.PropTypes.func,
      logOut: React.PropTypes.func
    },

  contextTypes:{
      sendNotification: React.PropTypes.func.isRequired
    },
   getChildContext: function() {
      return {
          user: this.state.user,
          signUp: this.signUp,
          logIn: this.logIn,
          logOut: this.logOut
        }
    },

  signUp: function(email, password, username) {
    const userData = {
              email: email.trim(),
              password: password.trim(),
              username: username.trim()
    };

    const self = this;

    return $.ajax({
      url: '/signup',
      method: 'POST',
      data: userData
    }).done(function (data){
      self.setState({user: data.user});
    }).fail(function(data){
      console.log(data);
    })
  },

  logIn: function(email, password){
    const userData = {
              email: email.trim(),
              password: password.trim()
      };
        const self = this;

      return $.ajax({
        url: '/login',
        method: 'POST',
        data: userData
      }).done(function(data){
        self.setState({user: data.user});
      }).fail(function(data){
        console.log(data);
      });
    },

    logOut: function(email, password) {
      const self = this;

      return $.ajax({
        url: '/logout',
        method: 'GET',
      }).done(function(){
        self.setState({user: null});
      }).fail(function(data){
        console.log(data);
      })
    },
  render: function(){
    return (
      <div>
      {this.props.children}
      </div>
      )
  }
});

module.exports = UserAuth;