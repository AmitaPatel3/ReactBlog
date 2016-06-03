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
var React = require('react');;
var CommentList = require('./commentList');
var CommentFormData = require('./commentFormData');

var SingleBlogDetails = React.createClass({
  render: function(){
  
  var author = this.props.author ? this.props.author.local.email : null;

  return(
    <div className="singleblogpost">
      <p>{this.props.oneBlog.title}</p>
      <img src={this.props.oneBlog.image}/>
      <p>{this.props.oneBlog.content}</p>
      <p>{this.props.oneBlog.date.substr(0,10)}</p>
      <CommentList commentsArray={this.props.oneBlog.comments} id={ this.props.oneBlog._id } deleteComment={this.props.deleteComment}/>
      <CommentFormData loadOneBlogFromServer={ this.props.loadOneBlogFromServer } id={ this.props.oneBlog._id }   />
    </div>
    )
  }
});
module.exports = SingleBlogDetails;