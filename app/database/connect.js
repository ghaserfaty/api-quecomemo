const mongoose = require('mongoose');
const uri = "mongodb+srv://ghaserfaty:cavegol99@cluster0.qw7y2.mongodb.net/recipes?retryWrites=true&w=majority";

mongoose.connect(uri)
const db = mongoose.connection;
db.once("open", function () {
  console.log("Connected successfully");
});
