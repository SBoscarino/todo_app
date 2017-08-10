//for routes

const router = require('express').Router();
const todoModel = require('../models/todos'); //two dots because we have to go up a folder from this one. We have to reach the todos.js in models file so we can use the function within.


//Use the todo's route. when a request is made to /todo's, the function is invoked. connect to the mongo file to get the newest database instance. execute that function witin then return that data and keep going to render to the page the data witin the collection.
router.get('/todos', function(req, res){
  todoModel.getAll(function(err, data){
    res.render('index', {todos : data});
  })
})

//this will handle post actions from the index.mustache.
router.post('/todos', function(req, res){
  todoModel.insert(req.body, function(err, result){
    res.redirect('/todos'); //this redirects us to the todos page with each submit.
  });
})

//for deleting items.
router.post('/todos/delete/:id', function(req, res){
  todoModel.remove(req.params.id, function(err, result){
    res.redirect('/todos'); //this redirects us to the todos page with each submit.
  });
})



module.exports = router;
