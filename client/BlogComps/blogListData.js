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
var BlogList = require('./blogList');

var BlogListData = React.createClass({
getInitialState: function(){
    return{
      allBlog: null,
    }
  },
loadAllBlogsFromServer: function(){
  $.ajax({
    url:'/api/blog',
    method: 'GET'
  }).done(data => this.setState({ allBlog: data}) );
},
componentDidMount: function(){
  this.loadAllBlogsFromServer();
},
  render: function(){
    return this.state.allBlog ? <BlogList blogArray={ this.state.allBlog }/> : null;
  }
});

module.exports = BlogListData;

