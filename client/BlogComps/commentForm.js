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

function CommentForm(props){
  return(
      <div className="container">
       <div className="row col-lg-8 col-lg-offset-4">
        <form action='' method='POST' onSubmit={ props.handleCommentFormSubmit } role='form' >
           <textarea className="form" rows="6" columns="3" value={ props.comment } onChange={ props.onCommentChange } 
           placeholder='Add comments here!' id="comment"></textarea><br/>
            <button type='submit' className="legend button-color">Submit Comment</button>
         </form>   
        </div>
      </div>
    )



};

module.exports = CommentForm;

