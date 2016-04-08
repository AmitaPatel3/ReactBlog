
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
var EditBlogForm = require('./editBlogForm');

var EditBlogData = React.createClass({
  getInitialState: function(){
    return{
      title: null,
      image: null,
      content: null,
      author: null,
      date: null,
    }
  },
  loadOneBlogFromServer: function(){
    var self = this;
    $.ajax({
      url: '/api/blog/' + this.props.id,
      method: 'GET',
    }).done(function(data){
      console.log("loadOneBlogFromServer", data);
      self.setState({
        title: data.title,
        image: data.image,
        content: data.content,
        author: data.author,
        date: data.date
      })
    })
  },
  componentDidMount: function(){
    this.loadOneBlogFromServer();
  },

  updateBlogForm: function(blog){
    $.ajax({
      url: '/api/blog/' + this.props.id,
      dataType: 'json',
      type: 'PUT',
      data: blog,
      success: function(data){
        console.log("this is updateBlogForm", data);
        this.loadOneBlogFromServer();
        this.props.toggleActiveComp('oneBlog');
      }.bind(this),
      error: function(xhr, status, err){
        console.error(status, err.toString());
      }.bind(this)
    });
  },
 
  onTitleChange: function(event){
    this.setState({title: event.target.value})
  },
  onImageChange: function(event){
    this.setState({image: event.target.value})
  },
  onContentChange: function(event){
    this.setState({content: event.target.value})
  },
  onDateChange: function(date){
    this.setState({date: event.target.value})
  },
  handleBlogEditSubmit: function(e){
    e.preventDefault();

    var title = this.state.title.trim();
    var image = this.state.image;
    var content = this.state.content.trim();
    var date = this.state.date.trim();
    
    console.log('this is handleBlogEditSubmit', title);

    this.updateBlogForm({ title: title, image: image, content: content, date: date });
    this.setState({ title:'', image:'', content:'',  date:'' })
    },

  render: function(){
    return ( 
      <div>
      <EditBlogForm handleBlogEditSubmit={this.handleBlogEditSubmit} onTitleChange={this.onTitleChange} onImageChange={this.onImageChange} onContentChange={this.onContentChange} onDateChange={this.onDateChange}  {...this.state}/>
      </div>
      )
    }
});

module.exports = EditBlogData;

