var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog');
var app = express();

var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');

var blogRouter = require('./routes/blog');
var tweetRoutes = require('./routes/tweets'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(session({                     //configuring our app to tell it to use passport
 secret: 'ilovescotchscotchyscotchscotch'
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(session({
 cookie: {
   maxAge: 60000
 }
}));

app.use(flash());     //what is this?

require('./config/passport')(passport);
// routes ======================================================================
require('./routes/user.js')(app, passport);

if (process.env.NODE_ENV === 'production') {
  console.log('Runnng in production mode');

  app.use('/static', express.static('static'));
} else {

  var chokidar = require('chokidar');
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config.dev');
  var compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}


app.use('/img', express.static('img'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/api/blog', blogRouter)
app.use('/api/tweets/', tweetRoutes); 

var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log("🌞 🌞🌴🌞🌞🌴🌞🌞🌴🌞🌞🌴🌴🌞🌞🌴\n🌞🌞🌴🌞🌞🌴🌞🌞🌞🌴🌞🌞🌴🌞🌞 fired up  🌞🌞🌴🌞🌞🌞🌴🌞🌞🌴🌞🌞  \n 🌞🌞🌴🌞🌞🌞🌴🌞🌞🌞🌴🌞🌞 on " + port + "🌞🌞🌴🌞🌞🌴🌞🌞🌴🌞🌞🌴🌞🌞\n🌞🌞🌴🌞🌞🌴🌞🌞🌴🌞🌞🌞🌴🌞🌞🌴🌞🌞🌞🌴🌞🌞🌞🌴🌞🌞🌞🌴🌞🌞🌴🌴🌞")
});

