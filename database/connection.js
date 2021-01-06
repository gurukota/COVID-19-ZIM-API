var MongoClient = require('mongodb').MongoClient;

module.exports = async () => {
    
    try {
        await MongoClient.connect(process.env.MONGODB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Database Connectivity Error', error);
        throw new Error(error);
    }
};