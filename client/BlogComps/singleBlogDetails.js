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

function SingleBlogDetails(props){
  console.log(props);
  var author = props.author ? props.author.local.email : null;
  return(
    <div>
      <img src={props.oneBlog.image}/>
      <p>{props.oneBlog.content}</p>
      <p>{props.oneBlog.author}</p>
      <p>{props.oneBlog.date}</p>
    </div>
    )
  };

module.exports = SingleBlogDetails;