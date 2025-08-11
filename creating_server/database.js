const { MongoClient } = require('mongodb');

const url = "mongodb+srv://MO-cluster:oDVhIyh8q8hphOV0@mo-cluster.dwdljhy.mongodb.net/";
const client = new MongoClient(url);
//  here mongoClient is class  and client is the instance of the class. 

// Database name
const dbName = 'UserRegistery';
const data = {
    firstName: 'Ankit',
    lastName: 'Gauam',
    age: '27',
    city: 'Jaipur',
    phoneNumber: '7485968552'
}
async function main() {
    // use connect method to connect to the server
    await client.connect();
    console.log('connection successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');

    // fetching the collection details.
    // - > find the data with query&value ,
    // -> to find all the data inside the collection just left {}
    const findResult = await collection.find({}).toArray();
    console.log('Found collection', findResult);

    // inserting into the collection.
    // const insertResult = await collection.insertMany([data]);
    // console.log('inserted docu=>', insertResult);

    // Update the document
    // const updateResult = await collection.updateOne({ firstName: 'Kunal' }, { $set: { middleName: 'Kumar' } });
    // console.log('Updated documents =>', updateResult);

    // Remove the document.
    // const deleteResult = await collection.deleteMany({ middleName: 'Kumar' });
    // console.log('Deleted documents =>', deleteResult);
    return 'done';
};

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());

