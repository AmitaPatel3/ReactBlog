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

var CommentFormData = React.createClass({
  getInitialState: function(){
    return{
      comments: null;
    }
  },
  loadAllCommentsFromServer: function(){

  },
  componentDidMount: function(){
    this.loadAllCommentsFromServer();
  }
  render: function(){
    return(
      <div>
      <CommentList />
      </div>
      )
  }
});

module.exports=CommentFormData;