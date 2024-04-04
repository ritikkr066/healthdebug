// const {username,password} =process.env;
// export const connectionSrt="mongodb+srv://ritik:health123@cluster0.w3rswvs.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0"


import mongoose from 'mongoose';

const { username, password } = process.env;
 const connectionStr="mongodb+srv://ritik:health123@cluster0.w3rswvs.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(connectionStr, {
//   useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to the database!");
});

// Export the db object if needed
export default db;
