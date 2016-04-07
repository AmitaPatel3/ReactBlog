var React = require('react');

var links = ['home', 'portfolio', 'blog', 'about'];

var Navbar = React.createClass({
  render: function (){
    console.log("i am navbar")
    var self = this;
    var link = links.map(function(item){
      return (
      <li className="nav-item li-navbar" key={item} >
        <a className="nav-link topnavbartext" onClick={self.props.setActiveComponent.bind(null, item)}>{item}</a>
      </li>
      )
    })

    return(
      <div>
        <div className="collapse" id="exCollapsingNavbar">
          <nav className="navbar navbar-light  bg-faded topnavbar ">
            <div className="nav navbar-nav navbarright">
              <ul className="li-navbar">
                {link}
              </ul>
            </div>
          </nav>
           <span className="text-muted"></span>
        </div>
          <nav className="navbar navbar-light bg-faded">
            <button className="navbar-toggler navbarright" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
             &#9776;
            </button>
            <a className="nav-item nav-link amita" href="#">Amita Patel Greer</a>
          </nav>
      </div>
      )
    }
  });

module.exports = Navbar;