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
      comments: null,
    }
  },
  onCommentChange: function(event){
    this.setState({ comment: event.target.value })
  },

  loadCommentsFromServer: function(){
    var self = this;
    var id = this.props.id;
    $.ajax({
      url: '/api/blog/' + this.props.id + '/comment',
      method: 'GET',
    }).done(function(comment){
      console.log('i loadCommentsFromServer', comment);
      self.setState({
        comments: comment.comments
      })
    })
  },
  handleCommentFormSubmit: function(event){
    event.preventDefault();

    var comment = this.state.comment;

    var self = this;
    console.log('i submit comment to server', comment);

    $.ajax({
      url: '/api/blog/' + this.props.id + '/comment',
      method: 'POST',
      data: comment,
      success: function(data){
        console.log(data, 'this is comment data');
        this.loadCommentsFromServer();
        this.props.loadOneBlogFromServer();
      }.bind(this)
    });

    this.setState({ comments:''});
  },
  componentDidMount: function(){
    this.loadCommentsFromServer();
  },

  render: function(){
    return(
      <CommentForm handleCommentFormSubmit={ this.handleCommentFormSubmit } onCommentChange={ this.onCommentChange }/>
      )
  }
});

module.exports = CommentFormData;