const MongoClient = require('mongodb').MongoClient
 const uri = 'mongodb://user:password@localhost:27017/dbName'
 let _db

 const connectDB = async (callback) => {
     try {
         MongoClient.connect(uri, (err, db) => {
             _db = db
             return callback(err)
         })
     } catch (e) {
         throw e
     }
 }

 const getDB = () => _db

 const disconnectDB = () => _db.close()

 module.exports = { connectDB, getDB, disconnectDB }

 const {firstName, lastName, userId, password, access} = this.state;
        // USER AUTH CONNECT
        var MongoClient = require('mongodb').MongoClient,
        f = require('util').format,
        assert = require('assert').strict;

        var user = encodeURIComponent('appuser');
        var pass = encodeURIComponent('admin');
        const database = "applicationdb";
        const authMechanism = 'DEFAULT';

        // var MongoClient = require('mongodb').MongoClient;
        // var url = "mongodb://localhost:27017/applicationdb"; 

        // // Connection URL
        var url = f('mongodb://%s:%s@localhost:27017/%s?authMechanism=%s',
        user, pass, database, authMechanism);

        MongoClient.connect(url, {useUnifiedTopology: true}, async(err, client) => {
            if (err) {
                console.log(err.ok);
                console.log("Error connecting to server");
            }
            else {
                const dbo = client.db(database);
                var myUser = {
                    firstName: firstName,
                    lastName: lastName,
                    userId: userId,
                    password: password,
                    access: access 
                };
                dbo.collection('users').insertOne(myUser, function(err, res) {
                    if (err) throw err;
                    console.log(`${firstName} ${lastName} was added as a ${access} user`)
                    client.close();
                });
            };
        });