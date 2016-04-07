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

var CommentFormData = React.createClass({
  getInitialState: function(){
    return{
      comments: null;
    }
  },
  loadAllCommentsFromServer: function(){
    var self = this;
    var id = this.props.id

  },
  componentDidMount: function(){
    this.loadAllCommentsFromServer();
  }
  render: function(){
    return(
      <div>
      <CommentList />
      </div>
      )
  }
});

module.exports=CommentFormData;
loadCommentsFromServer: function(){
    
    var self = this; 
    var id = this.props.id;
    $.ajax({
      url: this.props.urlGoal + id +'/comment',
      method: 'GET',
    }).done(function(comment){
     
      self.setState({ 
        comments: comment.comments
      })
    })
  },a