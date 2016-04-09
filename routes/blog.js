var express = require('express');
var router = express.Router();
var Blog = require('../models/blog');
var Comment = require('../models/comment');

router.route('/blog')
  .post(function(req,res) {
    var auth = req.user ? req.user._id : "56d4b1ca72ea3eefc21c8f95"
    var blog = new Blog({
    
    title: req.body.title,
    image: req.body.image,
    content: req.body.content,
    author: auth,
  });

    blog.save(function(err, blog) {
        if(err){
           res.status(500).send(err, 'Something failed!');
        } else {
          res.redirect('blog')
        }
    })
  })

  .get(function(req, res) {
    Blog.find()
    .populate('author')
    .populate('comments')
    .exec(function(err, blogs) {
      if(err) {
        console.log(err)
      } else {
        res.json(blogs)
      }
    })
  });


router.route('/blog/:blog_id')
  .get(function(req,res) {
    Blog.findById(req.params.blog_id)
      .populate({ path: 'comments', select: 'body date user' }) 
      .populate({ path: 'user', select: 'local.username'})
      .exec(function(err, blog){
        if (err) {
          console.log(err)
        } else {
          res.json(blog)
        }
      })   
  })

  .put(function(req, res) {
    Blog.findById(req.params.blog_id, function(err, blog) {
      if (err) {
        console.log(err);
      } else {
        blog.title = req.body.title ? req.body.title : blog.title;
        blog.image = req.body.image ? req.body.image : blog.image;
        blog.content = req.body.content ? req.body.content : blog.content;
        blog.author = req.body.author ? req.body.author : blog.author;
        blog.date = req.body.date ? req.body.date : blog.date;

          blog.save(function(err, newBlog) {
            if (err) {
              console.log(err)
            } else {
              res.json({ message: 'Blog updated!'});
            }
          })
        }
      })
    })

  .delete(function(req, res){
    Blog.remove({ _id: req.params.blog_id }, function (err, blog){
      if(err) {
        console.log(err);
      } else {
        res.json({ title: 'blog was successfully deleted!' });
      }
    })
  });

router.route('/blog/:blog_id/comment')
  .get(function(req, res){
    Blog.findById(req.params.blog_id)
      .populate({
       path: 'comments',
      populate: {
        path: 'user', 
        select: 'local.username',
        }
      })
      .exec(function(err, comments){
        if(err){
          res.status(500).send(err, "Something broke on getting comments");
        } else {
          res.json(comments);
        }
      })
  })
  .post(function(req, res){
    var comment = new Comment();
    comment.body = req.body.body ? req.body.body : comment.body;
    comment.user = '56d4b1ca72ea3eefc21c8f95';
    comment.blog = req.params.blog_id;

    comment.save(function(err, com){
      if(err) {
          res.send(err);
        } else {
          Blog.findById(req.params.blog_id, function(err, blog){
            if(err) {
              res.send(err);
            } else {
              blog.comments.push(com._id);
              blog.save();
              res.json(com);
            }
          })
        }
      })
    })
  .delete(function(req, res){
    Blog.remove({ _id: req.params.goal_id}, function(err, blog){
      if(err) {
        console.log(err);
      } else {
        res.json({message: 'comment deleted!'});
      }
    })
  });

module.exports = router;














