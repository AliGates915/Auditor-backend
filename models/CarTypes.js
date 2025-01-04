const mongoose = require('mongoose');



const carTypeSchema = new mongoose.Schema({
    
    typeName: {
        type: String,
        require: true
    },
    date:{
        type: Date,
        default: new Date()
    }
})



module.exports = mongoose.model("carType", carTypeSchema)