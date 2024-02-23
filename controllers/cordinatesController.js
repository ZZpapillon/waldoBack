const Cordinates = require('../models/cordinates')

exports.getCordinates = async(req,res,next) => {
     try {
        const cordinates = await Cordinates.find();
        res.json(cordinates);
    } catch (error) {
        next(error);
    }
}

