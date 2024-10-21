const express = require('express')
var mongoose = require('mongoose');
const app = express()
const port = 8000
const cors = require('cors')
const connectDB=require('./DBConnect/ConnectDB');

// mongoose.connect("mongodb://localhost:27017/assignment");
connectDB();
app.use(cors());
app.use(express.json());

app.use(require("./routes"));

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})

process.on('SIGINT', async function () {
    await mongoose.disconnect();
    process.exit(0)
});