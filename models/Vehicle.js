const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  regNo: {
    type: String,
    require: true,
  },
  regCity: {
    type: String,
    require: true,
  },
  yearOfModel: {
    type: String,
    require: true,
  },
  carTypeID: {
    type: String,
    require: true,
  },
  carModelID: {
    type: String,
    require: true,
  },
  color: {
    type: String,
    require: true,
  },
  transmission: {
    type: String,
    require: true,
  },
  engineCapacity: {
    type: String,
    require: true,
  },
  chasisNo: {
    type: String,
    require: true,
  },
  engineNo: {
    type: String,
    require: true,
  },
  rateWithDriver: {
    type: String,
    require: true,
  },
  rateWithoutDriver: {
    type: String,
    require: true,
  },
  discountWeek: {
    type: String,
    require: true,
  },
  discountMonth: {
    type: String,
    require: true,
  },

  fuelType: {
    type: String,
    require: true,
  },
  features: {
    type: Array,
    require: true,
  },
  images: {
    type: Array,
    require: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("vehicle", vehicleSchema);
