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
  console.log(props);
  var author = props.author ? props.author.local.email : null;
  return(
        <div className="card col-sm-4">
          <img className="card-img-top" src={props.image} alt="Card image cap"/>
          <div className="card-block">
            <h4 className="card-title">{author}</h4>

            <p className="card-text">{props.content}</p>
             <p className="card-text">date: {props.date}</p>
             <button className="btn btn-primary-outline">Go</button>
            </div>
           <br/><br/><br/>
        </div>
      )
    };

module.exports = BlogCard;