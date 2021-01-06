var MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

module.exports = async () => {
    const url = "mongodb+srv://tinman:tinman@cluster0.3vqhy.mongodb.net/covid?retryWrites=true&w=majority"
    try {
        await MongoClient.connect(url,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Database Connectivity Error', error);
        throw new Error(error);
    }
};

