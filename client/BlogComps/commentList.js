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
var CommentCard = require('./commentCard');

var CommentList = React.createClass({
  render: function(){
    var comments = this.props.commentsArray;
    console.log(comments, "i am comment list");

    return(
     <div>
        {comments.map(function(comment){
          return <div><CommentCard body={comment.body} date={comment.date.substr(0,10)} user={comment.user} /></div>;
        })}
      </div>
      )
  }
});

module.exports = CommentList;