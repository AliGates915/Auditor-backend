const mongoose = require('mongoose');



const carModelSchema = new mongoose.Schema({
    carTypeID: {
        type: String,
        require: true
    },
    modelName: {
        type: String,
        require: true
    },
    date:{
        type: Date,
        default: new Date()
    }
})



module.exports = mongoose.model("carModel", carModelSchema)