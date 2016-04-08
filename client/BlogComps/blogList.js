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
var BlogCard = require('./blogCard');

function BlogList(props){
  var allBlog = props.blogArray.map(item =>{
    return(
      <BlogCard
        getId={ props.getId }
        id={ item._id }
        key={ item._id }
        title={ item.title }
        image={ item.image }
        content={ item.content }
        author={ item.author }
        date={ item.date }
        comments={ item.comments } />
      );
  });
  
    return(
      <div>
        { allBlog }
      </div>
    )
};

BlogList.propTypes = {
  blogArray: React.PropTypes.array.isRequired
};

module.exports = BlogList;
