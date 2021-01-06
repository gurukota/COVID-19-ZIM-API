const mongoose = require('mongoose');
require('dotenv').config();

// module.exports = async () => {
//     const url = "mongodb+srv://tinman:tinman@cluster0.3vqhy.mongodb.net/covid?retryWrites=true&w=majority"
//     try {
//         await MongoClient.connect(url,{
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         })
//         console.log('Database Connected Successfully');
//     } catch (error) {
//         console.log('Database Connectivity Error', error);
//         throw new Error(error);
//     }
// };

const url = "mongodb+srv://tinman:tinman@cluster0.3vqhy.mongodb.net/covid?retryWrites=true&w=majority"
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));
