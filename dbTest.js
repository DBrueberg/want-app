
// CONNECT AND CREATE THE DATABASE
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/node-react-starter";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database Created!");
//   db.close;
// });

// STANDARD CONNECT
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";


// USER AUTH CONNECT
// var MongoClient = require('mongodb').MongoClient,
// f = require('util').format,
// assert = require('assert').strict;

// var user = encodeURIComponent('appuser');
// var password = encodeURIComponent('admin');
// const database = "applicationdb";
// const authMechanism = 'DEFAULT';

// // Connection URL
// var url = f('mongodb://%s:%s@localhost:27017/%s?authMechanism=%s',
// user, password, database, authMechanism);

// Correct DB MongoClient connect set up
// MongoClient.connect(url, {useUnifiedTopology: true}, async(err, client) => {
//     if (err) {
//         console.log(err.ok);
//         console.log("Error connecting to server");
//     }
//     else {
//         const dbo = client.db(database);
//         dbo.collection('products').find().toArray(function(err, res) {
//             if (err) throw err
//             console.log(res);
//         });

        

//         dbo.collection('products').findOne({}, function(err, res) {
//             if (err) throw err
//             console.log(res);
//             // Close the db connection on the last db operation to be performed
//             client.close();
//         })

//         // user = db.runCommand({connectionStatus: 1});

//         // console.log("null").then(dbo.close());
        
        
//     }
    
// });

// Adding a user to a new collection
// var firstName =  "Devin"
// var lastName = "Brueberg"
// var userId = "brueberd"
// var pass = "password"
// var access = "admin"


// function test() {
//     MongoClient.connect(url, {useUnifiedTopology: true}, async(err, client) => {
//         if (err) {
//             console.log(err.ok);
//             console.log("Error connecting to server");
//         }
//         else {
//             const dbo = client.db(database);
//             var myUser = {
//                 firstName: firstName,
//                 lastName: lastName,
//                 userId: userId,
//                 password: pass,
//                 access: access 
//             };
//             dbo.collection('users').insertOne(myUser, function(err, res) {
//                 if (err) throw err;
//                 console.log(`${firstName} ${lastName} was added as a ${access} user`)
//                 client.close();
//             });
//         };
//     });   
// }

// test();



// ADD A USER TO THE DATABASE
// MongoClient.connect(url, {useUnifiedTopology: true}, async(err, client) => {
//     if (err) {
//         console.log(err.ok);
//         console.log("Error connecting to server");
//     }
//     else {
//         const dbo = client.db(database);
//         dbo.addUser('testUser', 'testUser', {
//             roles: [
//                 "read"
//             ]
//         }, function(err, result) {
//             if (err) throw err
//             console.log(result)
//             console.log("user added")
//             client.close();
//         });
    
//     }
// });



// MongoClient.connect(url, {useUnifiedTopology: true}, async(err, client) => {
//     if (err) {
//         console.log(err.ok);
//         console.log("Error connecting to server");
//     }
//     else {
//         const db = client.db(database);
//         const collection = db.collection('products');
//         const records = await collection.find().toArray();
//         console.log(records);
//         client.close();  
//     }
// });

// MongoClient.connect(url, {useUnifiedTopology: true}, async(err, client) => {
//     if (err) {
//         console.log(err.ok);
//         console.log("Error connecting to server");
//     }
//     else {
//         const dbo = client.db(database);
        
//         dbo.

//         // user = db.runCommand({connectionStatus: 1});

//         // console.log("null").then(dbo.close());
        
        
//     }
    
// });

// Use connect method to connect to the Server

// MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
//     assert.strictEqual(null, err);
//     var dbo = db.db(database)
//     const collection = dbo.collection('products')

//     collection.find().toArray()
//     .then(items => {
//             console.log(items);
//     })

//     db.close();  
// })

// Use connect method to connect to the Server
// const db = MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
//     // assert.strictEqual(null, err);
//     // console.log("Connected correctly to server");
//     // console.log(db);

//     var dbo = db.db("applicationdb")

//     dbo.collection('products').find().toArray(function(err, res) {
//         if (err) throw err;
//         console.log(res);
//     })

    
//     // if (err) {
//     //     console.log(err.ok);
//     //     console.log("Error connecting to server")
//     // }
//     // else {
//     //     console.log("Connected to server")
//     //     db.collection("products").find().toArray(function(err, res) {
//     //         if (err) throw err;
//     //         console.log(res);
//     //     })

//     //     db.close();   
//     // }
    
// });   

// (async() => {
//     const client = await  MongoClient.connect(url, {useUnifiedTopology: true});
//     const db = client.db(database);
//     const collection = await db.collection('products');
//     const records = await collection.find().toArray();
//     console.log(records);
//     client.close();
// })();

// (async() => {
//     MongoClient.connect(url, {useUnifiedTopology: true}, async(err, client) =>{
//         if (err) {
//             console.log(err.ok);
//             console.log("Error connecting to server");
//         }
//         else {
//             const db = client.db(database);
//             const collection = db.collection('products');
//             const records = await collection.find().toArray();
//             console.log(records);
//             client.close();  
//         }
//     });
    
// })();








// Creating a collection for products
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("node-react-starter");

    // // Create products collection
    // dbo.createCollection("products", function(err, res) {
    //     if (err) throw err;
    //     console.log("Collection created!");
    //     db.close();
    // });

    // Inserting products
    var myProducts = [
        {
            name: "Hogs",
            description: "tasty treat"
        },
        {
            name: "Hot Dogs",
            description: "makes one sick"
        }
    ]
    // var myProducts = [
    //     {
    //         brand: "Nike",
    //         name: "Legend Essential",
    //         description: "Lightweight, flexible, and breathable.",
    //         category: "shoes",
    //         price: "64.95",
    //         image: "../productImage/productImageThumb/nikeLegendThumb.jpg"
    //     },
    //     {
    //         brand: "Nike",
    //         name: "Air Mavin Low Mens Basketball Shoes",
    //         description: "Durable leather and synthetic upper with breathable mesh panels.",
    //         category:"shoes",
    //         price: "65.00",
    //         image: "../productImage/productImageThumb/nikeAirMavinThumb.jpg"
    //     },
    //     {
    //         brand: "Under Armour",
    //         name: "Men's UA Project Rock 3 Training Shoes",
    //         description: "Lightweight and durable, excellent training shoes for lifting.",
    //         price: "140.00",
    //         "image": "../productImage/productImageThumb/projectRock3Thumb.jpg"
    //     },
    //     {
    //         brand: "Nike",
    //         name: "Air Vapormax Plus",
    //         description: "Rubber pods to keep you comfortable, unbeatable style.",
    //         price: "200.00",
    //         image: "../productImage/productImageThumb/vapormaxPlusThumb.jpg"
    //     }
    // ];

    dbo.collection("product").insertMany(myProducts, function(err, res) {
        if (err) throw err;
        console.log(`Number of documents inserted ${res.result.n}`);
        db.close();
    });

    // Product query
    // dbo.collection("user").find().toArray(function(err, res) {
    //     if (err) throw err;
    //     console.log(res);
    //     db.close();
    // })
    // dbo.collection('users').findOne({}, function(err, doc) {
    //     if (err) throw err;
    //     if (doc) console.log(doc);
    //     db.close();
    // })
});

// CREATE A COLLECTION IN THE DATABASE
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.createCollection("customers", function(err, res) {
//         if (err) throw err;
//         console.log("Collection created!");
//         db.close();
//     });
// });

// INSERT INTO A COLLECTION. insertOne() for one doc and insertMany() for 
// many docs. If no _id: field is specified, one will be created
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");

//     // insertOne()
//     var myObj = { 
//         name: "Company Inc",
//         address: "Highway 37"
//     };
//     // insertMany()
//     // var myObj = [
//     //     { name: 'John', address: 'Highway 71'},
//     //     { name: 'Peter', address: 'Lowstreet 4'},
//     //     { name: 'Amy', address: 'Apple st 652'},
//     //     { name: 'Hannah', address: 'Mountain 21'},
//     //     { name: 'Michael', address: 'Valley 345'},
//     //     { name: 'Sandy', address: 'Ocean blvd 2'},
//     //     { name: 'Betty', address: 'Green Grass 1'},
//     //     { name: 'Richard', address: 'Sky st 331'},
//     //     { name: 'Susan', address: 'One way 98'},
//     //     { name: 'Vicky', address: 'Yellow Garden 2'},
//     //     { name: 'Ben', address: 'Park Lane 38'},
//     //     { name: 'William', address: 'Central st 954'},
//     //     { name: 'Chuck', address: 'Main Road 989'},
//     //     { name: 'Viola', address: 'Sideway 1633'}
//     //   ];

//     //insertOne()
//     dbo.collection("customers").insertOne(myObj, function(err, res) {
//         if (err) throw err;
//         console.log("1 document inserted"); // use res.insertCount to display the number of 
//         // inserted docs
//         db.close();
//     });

//     // insertMany() 
//     // dbo.collection("customers").insertMany(myObj, function(err, res) {
//     //     if (err) throw err;
//     //     console.log("Number of docs inserted: " + res.insertedCount);
//     //     db.close();
//     // });
    
// });

// FINDING DATA IN MONGO. find() and findOne() are the same as SELECT
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");

//     // findOne()
//     // dbo.collection("customers").findOne({}, function(err, res) {
//     //     if (err) throw err;
//     //     console.log(res.name);
//     //     db.close();
//     // });

//     // find()
//     dbo.collection("customers").find({}).toArray(function(err, res) {
//         if (err) throw err;
//         console.log(res);
//         db.close();
//     })
// })

// QUERY THE DB. FILTERING
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
// //     var query = {address: "Park Lane 38"};
// //     // // Retrieves the result objects in an array
// //     // dbo.collection("customers").find(query).toArray(function(err, res) {
// //     //     if (err) throw err;
// //     //     console.log(res);
// //     //     db.close();
// //     // });

// //     // Retrieves the result object
//     // dbo.collection("customers").findOne(query, function(err, res) {
//     //     if (err) throw err;
//     //     console.log(res);
//     //     db.close();
//     // });

//     // Finds where the address starts with a letter S. Called regular expression
//     var query = {address: /^S/};
//     dbo.collection("customers").find(query).toArray(function(err, res) {
//         if (err) throw err;
//         console.log(res);
//         db.close();
//     });
// });

// SORTING THE DB. 1 is alphabetic ascending, -1 is reverse descending
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");

//     var mySort = {name: -1};
//     dbo.collection("customers").find().sort(mySort).toArray(function(err, res) {
//         if (err) throw err;
//         console.log(res);
//         db.close();
//     })
// })

// DELETING COLLECTIONS
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");

//     // // Delete One
//     // myQuery = {address: "Mountain 21"};
//     // dbo.collection("customers").deleteOne(myQuery, function(err, obj) {
//     //     if (err) throw err;
//     //     console.log("1 document deleted");
//     //     db.close();
//     // });

//     // Delete Many: In "obj" there is a result object with {n: #ofFilesDeleted, ok: 1}
//     myQuery = {address: /^O/};
//     dbo.collection("customers").deleteMany(myQuery, function(err, obj) {
//         if (err) throw err;
//         console.log(obj.result.n + " document(s) deleted");
//         db.close();
//     });
// });

// DROP COLLECTION
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");

//     // // Drop a collection
//     // dbo.collection("customers").drop(function(err, delOK) {
//     //     if (err) throw err;
//     //     if (delOK) console.log("Collection deleted");
//     //     db.close();
//     // })

//     // Another way to drop a collection
//     dbo.dropCollection("customers", function(err, delOK) {
//         if (err) throw err;
//         if (delOK) console.log("Collection Deleted");
//         db.close();
//     })
// })

// UPDATE DOCUMENT. Using $set only the specified fields are updated
// result both methods return (n: 1, nModified: 2, ok: 1 )
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");

//     // Update one document
//     // var myQuery = {address: "Valley 345"};
//     // var newValues = {$set: {name:"Mickey", address: "Canyon 123"}};
//     // dbo.collection("customers").updateOne(myQuery, newValues, function(err, res) {
//     //     if (err) throw err;
//     //     console.log(res.result.n + " document updated");
//     //     db.close();
//     // });

//     // Update many documents
//     var myQuery = {address: /^S/};
//     var newValues = {$set: {name: "Minnie"}};
//     dbo.collection("customers").updateMany(myQuery, newValues, function(err, res) {
//         if (err) throw err;
//         console.log(res.result.nModified + " document(s) updated");
//         db.close();
//     });

// });

// LIMIT
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");

//     dbo.collection("customers").find().limit(5).toArray(function(err, res) {
//         if (err) throw err;
//         console.log(res);
//         db.close();
//     });
// });

// JOIN - mongodb performs left-outer join
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");

//     dbo.collection("orders").aggregate([
//         {$lookup: {
//             from: 'products',
//             localField: 'product_id',
//             foreignField: 'id',
//             as: 'orderDetails'
//         }
//     }
//     ]).toArray(function(err, res) {
//         if (err) throw err;
//         console.log(JSON.stringify(res));
//         db.close();
//     })
// })