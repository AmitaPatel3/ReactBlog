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
    console.log("DATA IN CCARD", this.props.body, this.props.date, this.props.username )
    return(
      <div>
        <p>{this.props.body}</p>
        <p>{this.props.date}</p>
        <p>{this.props.username}</p>
      </div>
      )
  }
});

module.exports = CommentCard;