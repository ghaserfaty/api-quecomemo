const recipeModel = require('./recipe-model')

exports.getRecipes = async function (req, res, next) {
    console.log('getRecipes')
    try {
        const recipes = await recipeModel.find({}).populate('ingredients');
        return res.status(200).json({ status: 200, data: recipes, message: "Success" });
    } catch (err) {
        return res.status(400).json({ status: 400, message: err.message });
    }
}

exports.addRecipe = async function (req, res, next) {
    try {
        const recipe =  new recipeModel(req.body);
        const result = await recipe.save();
        return res.status(200).json({ status: 200, data: result, message: "Success" })
        
    } catch (err) {
        return res.status(400).json({ status: 400, message: err.message });
    }
}


exports.removeRecipe = async function (req, res, next) {
    try {
        const _id =  req.body._id;
        const result = await recipeModel.deleteOne({_id});
        return res.status(200).json({ status: 200, data: result, message: "Success" })
        
    } catch (err) {
        return res.status(400).json({ status: 400, message: err.message });

    }
}

exports.updateRecipe = async function (req, res, next) {
    try {
        const _id =  req.body._id;
        const result = await recipeModel.updateOne({_id},req.body);
        return res.status(200).json({ status: 200, data: result, message: "Success" })
    } catch (err) {
        return res.status(400).json({ status: 400, message: err.message });
    }
}
