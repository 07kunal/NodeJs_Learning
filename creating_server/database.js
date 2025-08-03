const { MongoClient } = require('mongodb');

const url = "mongodb+srv://MO-cluster:oDVhIyh8q8hphOV0@mo-cluster.dwdljhy.mongodb.net/";
const client = new MongoClient(url);
//  here mongoClient is class  and client is the instance of the class. 

// Database name
const dbName = 'UserRegistery';

async function main() {
    // use connect method to connect to the server
    await client.connect();
    console.log('connection successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');
    const findResult = await collection.find({}).toArray();
    console.log('Found collection', findResult);
    // 
    return 'done';
};

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());

