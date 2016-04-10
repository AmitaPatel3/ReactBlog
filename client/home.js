var React = require('react');

var Home = React.createClass({
  render: function () {
    return (
      <div>
        <section className="hero">
          <div className="container">
            <div className="row">
              <div classname="col-md-12 text-right navicon">
                <a id="nav-toggle" className="nav_slide_button" href="#">
                  <span>
                
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      )
    }
  });

module.exports = Home;