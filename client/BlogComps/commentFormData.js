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
var CommentForm = require('./commentForm');

var CommentFormData = React.createClass({
  getInitialState: function(){
    return{
      body: null,
    }
  },

   handleSubmit: function(event){
    event.preventDefault();

    var data = {
      body: this.state.body
    };

    var self = this;
    console.log('i submit comment to server', data.body);

    $.ajax({
      url: '/api/blog/' + this.props.id + '/comment',
      method: 'POST',
      data: data,
      success: function(data){
        console.log(data, 'this is comment data');
        self.props.loadOneBlogFromServer();
      }.bind(this)
    });

    self.setState({ body:''});
  },
  onBodyChange: function(event){
    this.setState({ body: event.target.value });
  },


  render: function(){
    return(
      <CommentForm handleSubmit={ this.handleSubmit } onBodyChange={ this.onBodyChange } />
      )
  }
});

module.exports = CommentFormData;