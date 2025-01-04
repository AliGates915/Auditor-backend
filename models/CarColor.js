const mongoose = require('mongoose');



const carColorSchema = new mongoose.Schema({
    
    colorName: {
        type: String,
        require: true
    },
    date:{
        type: Date,
        default: new Date()
    }
})



module.exports = mongoose.model("carColor", carColorSchema)