/*
Index
  Blog
    BlogListData
      BlogList
        BlogCard
    EditBlogData
      EditBlogForm
    BlogFormData
      BlogForm
    SingleBlogDetailData
      SingleBlogDetails
        CommentFormData
          CommentForm
        CommentList
          CommentCard
*/

var React = require('react');
var SingleBlogDetails = require('./SingleBlogDetails');

var SingleBlogDetailData = React.createClass({
  getInitialState: function(){
    return{
      oneBlog: null,
      comments: [],
    }
  },
  loadOneBlogFromServer: function(){
    var self = this;
    const ajaxProps = {
      url: '/api/blog/' + this.props.id,
      method: 'GET',
    };
    console.log(ajaxProps);
    $.ajax(ajaxProps).done(function(data){
      console.log("I am loading one blog from server", data);
      self.setState({oneBlog: data})
    })
  },
  componentDidMount: function(){
    this.loadOneBlogFromServer();
  },

  render: function(){
    console.log("blog details is rendered")
    return this.state.oneBlog ? <SingleBlogDetails oneBlog={ this.state.oneBlog } /> : null;
  }

});

module.exports = SingleBlogDetailData;
