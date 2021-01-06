// var MongoClient = require('mongodb').MongoClient;
// require('dotenv').config();

// module.exports = async () => {
    
//     try {
//         await MongoClient.connect(process.env.MONGODB_URI,{
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         })
//         console.log('Database Connected Successfully');
//     } catch (error) {
//         console.log('Database Connectivity Error', error);
//         throw new Error(error);
//     }
// };


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://tinman:tinman@cluster0.3vqhy.mongodb.net/covid?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
