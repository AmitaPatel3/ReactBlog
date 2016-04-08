var React = require('react');

var Toggler = React.createClass({
  render() {
    const {toggleActiveComp} = this.props;
    return(
        <div className="container">
          <div className="btn-group" data-toggle="buttons">
            <button onClick={ () => toggleActiveComp('blog') } className="btn btn-info">Blog Display</button>
            <button onClick={ () => toggleActiveComp('form') } className="btn btn-success">Post New Blog</button>
          </div>
        </div> 
      )
    }
});

module.exports = Toggler;

