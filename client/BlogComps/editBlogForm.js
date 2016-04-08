
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

function EditBlogForm(props) {
    return (
      <div className="container myContainer">
      <form onSubmit={ props.handleBlogEditSubmit }>
        <h3> Edit Blog </h3>
        <fieldset className="form-group">
          <label>title</label>
          <input onChange={props.onTitleChange} value={props.title} type="text" className="form-control"/>
        </fieldset>
        <fieldset className="form-group">
          <label>image</label>
          <input onChange={props.onImageChange} value={props.image}  type="text" className="form-control"/>
        </fieldset>
        <fieldset className="form-group">
          <label>content</label>
          <input onChange={props.onContentChange} value={props.content} type="text" className="form-control"/>
        </fieldset>
        <fieldset className="form-group">
          <label>date</label>
          <input onChange={ props.onDateChange } value={ props.date }  className="form-control"/>
        </fieldset>
        <button className="btn btn-success-outline" type="submit"> Submit </button>
      </form>
      </div>
      )
  };

module.exports = EditBlogForm;
