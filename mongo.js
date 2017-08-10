//6
//giving mongo its own file
const mongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID; //for exporting the ID

let database = null;

//
function connect(url, callback) {
//if we are already connected to the database, ignore this.
//if database does not a value, return the database.
  if(database !== null) {
    return database;
  }

  mongoClient.connect(url, function(err, db){
    database = db;
    callback();
  })
}

function db(){
  return database;
};

module.exports = {
  connect: connect,
  db: db,
  ObjectID : ObjectID
};


//connects other files to mongo db by creating an instance of the database.
