
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
var EditBlogData = require('./BlogComps/editBlogData');

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
    } else if (type === 'editOne'){
      return this.setState({ activeBlogId: id, activeComponent: 'editBlog' })
    } else {
      return null
    }
  },
  showComp: function(){
    if(this.state.activeComponent === 'blog'){
      console.log('show comp all blogs')
      return <BlogListData getId={ this.getId }/>

    } else if (this.state.activeComponent === 'oneBlog') {
      console.log('show comp one blog')
      return <SingleBlogDetailData id={ this.state.activeBlogId }/>

    } else if (this.state.activeComponent === 'editBlog') {
      console.log('show comp edit blog')
      return <EditBlogData id={ this.state.activeBlogId } toggleActiveComp={ this.toggleActiveComp } />

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

