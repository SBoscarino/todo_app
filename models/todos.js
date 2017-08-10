//models js

//This is for getting data from the mongo database and letting the user know that we have it.

const mongo = require('../mongo.js');

//gets ALL todo's
function getAll(callback) {
  const db = mongo.db();
  db.collection('todos').find({}).toArray(function(err, data){
  callback(err, data);
  })
}

function insert(todo, callback){
  const db = mongo.db();
  todo.done = false; //always adds false to each new list item
  db.collection('todos').insert(todo, function(err, result){
    console.log(err, result);
    callback(err, result);
  });
}

//for removing things from database. Called by routes.
function remove(id, callback){
  const db = mongo.db();
  db.collection('todos').deleteOne({_id : new mongo.ObjectID(id)},  function(err, result){
      callback(err, result);
  });
}

//export getAll function as getAll. Same for insert and remove.
module.exports = {
  getAll : getAll,
  insert : insert,
  remove : remove
};
