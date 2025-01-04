const mongoose = require('mongoose');



const carFeatureSchema = new mongoose.Schema({
    
    featureName: {
        type: String,
        require: true
    },
    date:{
        type: Date,
        default: new Date()
    }
})



module.exports = mongoose.model("carFeature", carFeatureSchema)