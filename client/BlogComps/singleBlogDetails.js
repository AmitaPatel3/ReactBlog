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
var CommentList = require('./commentList')

function SingleBlogDetails(props){
  console.log(props);
  console.log(props.oneBlog.comments)
  var author = props.author ? props.author.local.email : null;
  return(
    <div>
      <img src={props.oneBlog.image}/>
      <p>{props.oneBlog.content}</p>
      <p>{props.oneBlog.author}</p>
      <p>{props.oneBlog.date}</p>
      <CommentList commentsArray={props.oneBlog.comments}/>
    </div>
    )
  };

module.exports = SingleBlogDetails;