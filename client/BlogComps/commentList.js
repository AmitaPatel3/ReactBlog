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

var CommentList = React.createClass({
  render: function(){
    var comments = this.props.commentsArray;
    return(
     <div>
        {comments.map(function(comment){
          return <p>{comment.body} {comment.date} {comment.user}</p>;
      
        })}
      </div>
      )
  }
});

module.exports = CommentList;