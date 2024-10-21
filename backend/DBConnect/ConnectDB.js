// server.js or app.js
const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://vickrammark54:iv50xQRUlFGYXvK6@cluster0.jb4gr.mongodb.net/';  

const connectDB=async()=>{
  await mongoose.connect(dbURI, {
    useNewUrlParser: true,     
    useUnifiedTopology: true 
  })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log('MongoDB connection error:', err));
  
  mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to MongoDB');
  });
  
  mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error:', err);
  });
}

module.exports=connectDB;