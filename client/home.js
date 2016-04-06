var React = require('react');

var Home = React.createClass({
  render: function () {
    return (
      <div>
        <div className="jumbotron">
          <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
              <li data-target="#carousel-example-generic" data-slide-to="1" className="active"></li>
              <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active firstpic">
                <img data-src=""/>
              </div>
              <div className="carousel-item secondpic">
                <img data-src=""  />
              </div>
            </div>
              <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                <span className="icon-prev" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                <span className="icon-next" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
          </div>
        </div>
      </div>
      )
    }
  });

module.exports = Home;