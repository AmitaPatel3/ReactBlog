
var React = require('react');
var ReactDOM = require('react-dom');
var Notifier = require('./notifier');
var Navbar = require('./navbar');
var Footer = require('./footer');
var Home = require('./home');
var Portfolio = require('./portfolio');
var Blog = require('./blog');
var About = require('./about');
var UserApp = require('./userApp');
var UserAuth = require('./userAuth');
require('./stylesheets/main.scss');

var App = React.createClass({
  getInitialState: function() {
    return {
      activeComponent: 'home',
    }
  },
  setActiveComponent: function(componentName){
    console.log("found Comp:", componentName);
    this.setState({
      activeComponent: componentName 
    })
  },
  getActiveComponent: function() {
    return this.state.activeComponent;
  },
  showWhichComponent: function(){
    switch(this.state.activeComponent) {
      case 'home':
        return <Home/>
        break;
      case 'portfolio':
        return <Portfolio/>
        break;
      case 'blog':
        return <Blog/>
        break;
      case 'about':
        return <About/>
        break;
      case 'login':
        return <UserApp login={ true } setActiveComponent={ this.setActiveComponent } />
        break;
      case 'signUp':
        return <UserApp login={ false } setActiveComponent={ this.setActiveComponent } />
        break;
      default:
        return <Home/>
    };
  },
  render: function() {
    return(
          <div className=''>
            <Notifier>
              <UserAuth>
                  <Navbar setActiveComponent={ this.setActiveComponent } getActiveComponent= {this.getActiveComponent} />
                    { this.showWhichComponent() }
                  <Footer/> 
              </UserAuth>
            </Notifier>
          </div> 
      )
     }
  });

ReactDOM.render( <App />, document.getElementById('app'));