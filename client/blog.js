
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
var Toggler = require('./toggler');
var BlogListData = require('./BlogComps/blogListData');
var SingleBlogDetailData = require('./BlogComps/singleBlogDetailData');

var Blog = React.createClass({
  getInitialState: function(){
    return{
      activeComponent: 'blog',
      activeBlogId: null,
    }
  },
  getId: function(type, id){
    if(type ==='showOne'){
      return this.setState({ activeBlogId: id, activeComponent: 'oneBlog' })
    } else if (type === 'editOne') {
      return this.setState({ activeBlogId: id, activeComponent: 'editBlog' })
    } else {
      return null;
    }
  },
  showComp: function(){
    if(this.state.activeComponent === 'blog'){
      return <BlogListData getId={ this.getId }/>
    } else if (this.state.activeComponent === 'oneBlog') {
      return <SingleBlogDetailData id={ this.state.activeBlogId }/>
    } else {
      throw new Error("Invalid activeComponent", this.state.activeComponent)
    }
  },
  toggleActiveComp: function(name){
    this.setState({activeComponent: name})
  },
  render: function() {
    return(
      <div className="container">
        <Toggler toggleActiveComp={ this.toggleActiveComp }/>
        {this.showComp()}
      </div>
      )
    }
  });

module.exports = Blog;

