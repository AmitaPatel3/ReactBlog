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
    return(
      <div>
        {this.props.body}
        {this.props.date}
        {this.props.user}
        {this.props.username}
      </div>

      )
  }
});

module.exports = CommentCard;