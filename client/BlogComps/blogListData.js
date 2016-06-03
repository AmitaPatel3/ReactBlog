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
contextTypes: {
  sendNotification: React.PropTypes.func.isRequired
},
loadAllBlogsFromServer: function(){
  $.ajax({
    url:'/api/blog',
    method: 'GET'
  }).done(data => this.setState({ allBlog: data}) );
},

deleteSingleBlog: function(id){
  var self = this;
  if (confirm('Wanna delete?') ) {
    $.ajax({
      url: '/api/blog/' + id,
      method: 'DELETE'
    }).done(function(){
      self.loadAllBlogsFromServer();
      self.context.sendNotification("Deleted blog yo!");
    })
  }
},

componentDidMount: function(){
  this.loadAllBlogsFromServer();
},
  render: function(){
    return this.state.allBlog ? <BlogList getId={ this.props.getId } blogArray={ this.state.allBlog } deleteSingleBlog={ this.deleteSingleBlog } /> : null;
  }
});

module.exports = BlogListData;

