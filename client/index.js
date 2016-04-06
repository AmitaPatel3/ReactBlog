
var React = require('react');
var ReactDOM = require('react-dom');
var Notifier = require('./notifier');
var Navbar = require('./navbar');
var Footer = require('./footer');
var Home = require('./home');
var Portfolio = require('./portfolio');
var Blog = require('./blog');
var About = require('./about');
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
      default:
        return <Home/>
    };
  },
  render: function() {
    return(
          <div className=''>
            <Notifier>
              <Navbar setActiveComponent={ this.setActiveComponent } />
              { this.showWhichComponent() }
              <Footer/> 
            </Notifier>
          </div> 
      )
     }
  });

ReactDOM.render( <App />, document.getElementById('app'));