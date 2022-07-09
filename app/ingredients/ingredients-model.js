const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    name: String,
});

const ingredientModel = mongoose.model('ingredient', ingredientSchema);
module.exports = ingredientModel;
