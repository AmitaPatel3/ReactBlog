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
    }
  },
   deleteComment: function(id){
    var self = this;
    $.ajax({
      url: '/api/blog/' + this.props.id + '/comment/' + id,
      method: 'DELETE'
    }).done(function(){
      alert('comment deleted');
      self.loadOneBlogFromServer();
    })
  },
  loadOneBlogFromServer: function(){
    var self = this;
    const ajaxProps = {
      url: '/api/blog/' + this.props.id,
      method: 'GET',
    };
    // console.log(ajaxProps);
    $.ajax(ajaxProps).done(function(data){
      self.setState({oneBlog: data})
    })
  },


  componentDidMount: function(){
    this.loadOneBlogFromServer();
  },

  render: function(){
    return this.state.oneBlog ? <SingleBlogDetails loadOneBlogFromServer={ this.loadOneBlogFromServer } oneBlog={ this.state.oneBlog } id={ this.props.id } deleteComment={ this.deleteComment } /> : null;
  }

});

module.exports = SingleBlogDetailData;
