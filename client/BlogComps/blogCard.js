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

function BlogCard(props){
  var author = props.author ? props.author.local.email : null;
  return(
      <div className="panel panel-default blogcard">
        <div className="panel-body"><img className="blog-img" src={props.image}/>
          <div className="panel-body">
            {props.title}
            {props.content}
            {props.date}
            <button onClick={props.getId.bind(null, 'showOne', props.id)} className="btn btn-primary">Read More</button>
            <button onClick={props.getId.bind(null, 'editOne', props.id)} className="btn btn-primary">Edit</button>
            <button onClick={props.deleteSingleBlog.bind(null, props.id)} className="btn btn-primary">Delete</button>

          </div>
        </div>
      </div>
      )
    };

module.exports = BlogCard;

