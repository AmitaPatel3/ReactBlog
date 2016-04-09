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
var BlogForm = require('./blogForm');

var BlogFormData = React.createClass({
  getInitialState: function(){
    return{
      title: null,
      image: null,
      content: null,
      author: null,
      date: null,
    }
  },
  onTitleChange: function(event){
    this.setState({ title: event.target.value })
  },
  onImageChange: function(event){
    this.setState({ image: event.target.value })
  },
  onContentChange: function(event){
    this.setState({ content: event.target.value })
  },
  onAuthorChange: function(event){
    this.setState({ author: event.target.value })
  },
  onDateChange: function(event){
    this.setState({ date: event.target.value })
  },

  submitBlogToServer: function(event){
    event.preventDefault();

    var blogData = {
      title: this.state.title,
      image: this.state.image,
      content: this.state.content,
      author: this.state.author,
      date: this.state.date,
    };

    var self = this;
    console.log('i submit blog to server', blogData);

    $.ajax({
      url: '/api/blog',
      method:'POST',
      data: blogData
    }).done(function(data){
      console.log('inside success', data);
      self.props.toggleActiveComp('blog');
    });

  this.setState({title:'', image:'', content:'', author:'', date:''});
  },

  render: function(){
    return(
      <div>
      <BlogForm submitBlogToServer={this.submitBlogToServer} onTitleChange={this.onTitleChange} onImageChange={this.onImageChange} onContentChange={this.onContentChange} onAuthorChange={this.onAuthorChange} onDateChange={this.onDateChange} {...this.state}/>
      </div>
      )
  }
});

module.exports = BlogFormData;