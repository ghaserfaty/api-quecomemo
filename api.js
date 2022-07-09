const recipesController = require('./app/recipes/recipes-controller')
const ingredientsController = require('./app/ingredients/ingredients-controller')

const setupRoutes = (app) => {
    app.get('/recipes', recipesController.getRecipes)
    app.post('/recipes', recipesController.addRecipe)
    app.put('/recipes', recipesController.updateRecipe)
    app.delete('/recipes', recipesController.removeRecipe)
    
    app.get('/ingredients', ingredientsController.getIngredients)
    app.post('/ingredients', ingredientsController.addIngredient)
    app.put('/ingredients', ingredientsController.updateIngredient)
    app.delete('/ingredients', ingredientsController.removeIngredient)
}

module.exports = setupRoutes
