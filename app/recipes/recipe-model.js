const mongoose = require('mongoose');
const ingredientsSchema = require('../ingredients/ingredients-model').schema

const recipeSchema = new mongoose.Schema({
    title: String,
    ingredients: [{ type: mongoose.Types.ObjectId, ref: 'ingredient' }]
});

const recipeModel = mongoose.model('Recipe', recipeSchema);
module.exports = recipeModel;
