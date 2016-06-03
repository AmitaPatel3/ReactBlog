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

var React=require('react');

var CommentCard = React.createClass({
  render: function(){
    console.log("DATA IN CARD", this.props.body, this.props.date, this.props.username )
    return(
      <div>
        <p>{this.props.body}</p>
        <p>{this.props.date}</p>
        <p>{this.props.username}</p>
        <button onClick={this.props.deleteComment.bind(null, this.props.commentId)} type="button" className="btn btn-warning">Delete Comment</button>
      </div>
      )
  }
});

module.exports = CommentCard;