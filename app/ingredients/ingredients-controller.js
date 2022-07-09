const IngredientModel = require('./ingredients-model')

exports.getIngredients = async function (req, res, next) {
    console.log('getIngredients')
    try {
        const Ingredients = await IngredientModel.find({});
        return res.status(200).json({ status: 200, data: Ingredients, message: "Success" });
    } catch (err) {
        return res.status(400).json({ status: 400, message: err.message });
    }
}

exports.addIngredient = async function (req, res, next) {
    try {
        const Ingredient =  new IngredientModel(req.body);
        const result = await Ingredient.save();
        return res.status(200).json({ status: 200, data: result, message: "Success" })
        
    } catch (err) {
        return res.status(400).json({ status: 400, message: err.message });
    }
}


exports.removeIngredient = async function (req, res, next) {
    try {
        const _id =  req.body._id;
        const result = await IngredientModel.deleteOne({_id});
        return res.status(200).json({ status: 200, data: result, message: "Success" })
        
    } catch (err) {
        return res.status(400).json({ status: 400, message: err.message });

    }
}

exports.updateIngredient = async function (req, res, next) {
    try {
        const _id =  req.body._id;
        const result = await IngredientModel.updateOne({_id},req.body);
        return res.status(200).json({ status: 200, data: result, message: "Success" })
    } catch (err) {
        return res.status(400).json({ status: 400, message: err.message });
    }
}
