require('dotenv').config(); 
const mongoose = require('mongoose');

function connectDB()
{
        mongoose.connect(process.env.MONGO_CONNECTION_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
          });
          const connection = mongoose.connection;

          connection.once('open' , ()=>{
              console.log("connected");
          }).catch ('error', () => {
        console.log("could not connect");
          });
}
module.exports = connectDB;