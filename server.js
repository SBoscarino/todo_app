const express = require('express');
const mustacheExpress = require('mustache-express');
//1 mongo was here. This was deleted when we made our mongo.js file.
const mongo = require('./mongo'); //mongo is now in mongo file //8
const todoRoutes = require('./routes/todos');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended : false })); //for body parser
const mustacheExpressInstance = mustacheExpress();
mustacheExpressInstance.cache = null;

app.engine('mustache', mustacheExpressInstance);

app.set('view engine', 'mustache'); //sets view engine to look for .mustache files
app.set('views', __dirname + '/views');

app.use(express.static('public')); //for CSS files.

app.use('/', todoRoutes); //routes through todoroutes variable to get us to the todo's folder in routes.

let todos = {todos: [{ description : "make a todo site", done : false}] };

let url = 'mongodb://localhost:27017/awesome_todos';

mongo.connect(url, function(err, database){ //3
  if (err) {
    console.log("Throwing Shade", err);
    throw err;
  }
  app.listen(4333, function(){
    db = mongo.db();
    console.log('listening on port 4333')
  })
})
//we no longer need to app.get the todo's folder because it it in its own file due to routing.
