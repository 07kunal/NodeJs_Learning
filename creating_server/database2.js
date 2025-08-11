const { MongoClient } = require('mongodb');


const client = new MongoClient('mongodb+srv://MO-cluster:oDVhIyh8q8hphOV0@mo-cluster.dwdljhy.mongodb.net/');
const db = client.db();

// Create a collection that validates our union
await db.createCollection('pets', {
    validator: { $expr: { $in: ['$kind', ['dog', 'cat', 'fish']] } }
})