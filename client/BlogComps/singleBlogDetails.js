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

function SingleBlogDetails(props){
  console.log(props);
  console.log(props.oneBlog.comments, "i am comments rendered from single blog details")
  console.log(props.oneBlog._id)
  var author = props.author ? props.author.local.email : null;
  return(
    <div className="singleblogpost">
      <p>{props.oneBlog.title}</p>
      <img src={props.oneBlog.image}/>
      <p>{props.oneBlog.content}</p>
      <p>{props.oneBlog.author}</p>
      <p>{props.oneBlog.date}</p>
      <CommentList commentsArray={props.oneBlog.comments}/>
      <CommentFormData loadOneBlogFromServer={ props.loadOneBlogFromServer } id={ props.oneBlog._id }/>
    </div>
    )
  };

module.exports = SingleBlogDetails;