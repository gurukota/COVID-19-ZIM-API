const mongoose = require('mongoose');

module.exports = async () => {
    
    try {
        await mongoose.connect(process.env.MONGODB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Database Connectivity Error', error);
        throw new Error(error);
    }
};