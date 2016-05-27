var React = require('react');

var links = ['home', 'portfolio', 'blog', 'about'];

var LogIn = React.createClass({
  render: function(){
    var self = this;
    return(
      <div>
        <li className="nav-item pull-xs-right">
          <button onClick= { self.props.setActiveComponent.bind(null, 'signUp' )} className="nav-link btn btn-success-outline" type="submit">Sign Up</button>
        </li>
        <li className="nav-item pull-xs-right">
          <button onClick= { self.props.setActiveComponent.bind(null, 'login')} className="nav-link btn btn-success-outline" type="submit">Login</button>
        </li>
      </div>

      )
  }
});

var LogOut = React.createClass({
  contextTypes: {
    logOut: React.PropTypes.func.isRequired
  },
  render: function(){
    var self= this;
    return(
      <div>
        <li className="nav-item pull-xs-right">
          <button onClick= {self.context.logOut} className="nav-link btn btn-success-outline" type="submit">log out</button>
        </li>
        <li className="nav-item pull-xs-right">
          <p className="nav-link">Logged in as: {self.props.userDisplay}</p>
        </li>
      </div>
      )
  }
});

var Navbar = React.createClass({
  contextTypes: {
    user: React.PropTypes.object
  },
  render: function (){
    
    var self = this;
    var logButtons;
    var user = self.context.user;
    var userDisplay = null;
    if (user == null) {
      logButtons = <LogIn setActiveComponent={ self.props.setActiveComponent} />;
    } else {
      userDisplay = user.local.username;
      console.log('this is the logged in users username:', userDisplay);
      logButtons = <LogOut setActiveComponent= { self.props.setActiveComponent } userDisplay={ userDisplay} />;
    };

    var currentComponent = self.props.getActiveComponent;
    var linkList = 
      links.map(function(item){
      if(currentComponent() === item) {
      return (
      <li className="nav-item li-navbar" key={item} >
        <a className="nav-link topnavbartext" onClick={self.props.setActiveComponent.bind(null, item)}>{ item }<span className="sr-only">(current)</span></a>
      </li>
      ) 
    } else {
      return(
        <li className="nav-item" key={item}>
          <a className="nav-link" onClick={self.props.setActiveComponent.bind(null, item)}>{item}</a>
          </li>
        )
    }
  });

    return(
      <div>
        <div className="collapse" id="exCollapsingNavbar">
          <nav className="navbar navbar-light  bg-faded topnavbar ">
            <div className="nav navbar-nav navbarright">
              <ul className="li-navbar">
                { linkList }    { logButtons }
              </ul>
            </div>
          </nav>
           <span className="text-muted"></span>
        </div>
          <nav className="navbar navbar-light bg-faded navbar-Amita">
            <button className="navbar-toggler navbarright" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
             &#9776;
            </button>
            <a className="nav-item nav-link amita" href=""></a>
          </nav>
      </div>
      )
    }
  });

module.exports = Navbar;