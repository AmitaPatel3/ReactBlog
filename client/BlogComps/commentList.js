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
    var self = this;
    var comments = this.props.commentsArray.map(function(c){
      var b = c.body ? c.body : null
      return <CommentCard body={b} date={c.date.substr(0,10)} username={c.user.local.username} commentId={c._id} deleteComment={self.props.deleteComment}/>
    });

    return(
     <div>
          { comments }
      </div>
      )
  }
});

module.exports = CommentList;