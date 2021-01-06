const mongoose = require('mongoose');

module.exports = async () => {
    // const url = "mongodb+srv://tinman:tinman@cluster0.3vqhy.mongodb.net/covid?retryWrites=true&w=majority"
    try {
        await mongoose.connect(MONGODB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Database Connectivity Error', error);
        throw new Error(error);
    }
};


