const typeModel = require("../models/CarTypes");
const vehicleModel = require("../models/CarModels");
const colorModel = require("../models/CarColor");
const featureModel = require("../models/CarFeatures");
const vehicle = require("../models/Vehicle");
const { sendResponse } = require("../utils/sendResponse");

//! GET ALL VEHIVLES

const getAllVehicles = async (req, res) => {
  try {

    const allVehicles = await vehicle.find();
    sendResponse(res, 200, "success", "All Vehicles", allVehicles);

    
  } catch (error) {
    sendResponse(res, 500, "error", "Internal Server Error", error);
    
  }
};

//! ADD VEHICLE

const addVehicle = async (req, res) => {
  try {
    const {
      regNo,
      regCity,
      yearOfModel,
      carTypeID,
      carModelID,
      color,
      transmission,
      engineCapacity,
      chasisNo,
      engineNo,
      rateWithDriver,
      rateWithoutDriver,
      discountWeek,
      discountMonth,
      fuelType,
      features,
      images
    } = req.body;

    if (
      !regNo ||
      !regCity ||
      !yearOfModel ||
      !carTypeID ||
      !carModelID ||
      !color ||
      !transmission ||
      !engineCapacity ||
      !chasisNo ||
      !engineNo ||
      !rateWithDriver ||
      !rateWithoutDriver ||
      !discountWeek ||
      !discountMonth ||
      !fuelType ||
      !features ||
      features.length === 0
    )
      return sendResponse(res, 405, "error", "All Fields Are Required", null);

    const newVehicle = await vehicle({
      regNo,
      regCity,
      yearOfModel,
      carTypeID,
      carModelID,
      color,
      transmission,
      engineCapacity,
      chasisNo,
      engineNo,
      rateWithDriver,
      rateWithoutDriver,
      discountWeek,
      discountMonth,
      fuelType,
      features,
    });

    await newVehicle.save();
    sendResponse(res, 200, "success", "Vehicle Added Successfully", newVehicle);
  } catch (error) {
    sendResponse(res, 500, "error", "Internal Server Error", error);
  }
};

//! SINGLE VEHIClES

const singleVehicle = async(req,res) =>{
  try {
    const {vehicleID} = req.body;

  
    const singleVehicleFetch = await vehicle.findOne({
      _id: vehicleID
    });


    sendResponse(res, 200, "error", "Single Vehicle Details", singleVehicleFetch);



    
  } catch (error) {
    sendResponse(res, 500, "error", "Internal Server Error", error);
    
  }
}


//! EDIT VEHICLE

const editVehicle = async (req, res) => {
  try {
    
    const {
      vehicleID,
      regNo,
      regCity,
      yearOfModel,
      carTypeID,
      carModelID,
      color,
      transmission,
      engineCapacity,
      chasisNo,
      engineNo,
      rateWithDriver,
      rateWithoutDriver,
      discountWeek,
      discountMonth,
      fuelType,
      features
    } = req.body;

    
    const vehicleToUpdate = await vehicle.findById(vehicleID);
    if (!vehicleToUpdate) {
      return sendResponse(res, 404, "error", "Vehicle Not Found", null);
    }

   
    if (
      !vehicleID ||
      !regNo ||
      !regCity ||
      !yearOfModel ||
      !carTypeID ||
      !carModelID ||
      !color ||
      !transmission ||
      !engineCapacity ||
      !chasisNo ||
      !engineNo ||
      !rateWithDriver ||
      !rateWithoutDriver ||
      !discountWeek ||
      !discountMonth ||
      !fuelType ||
      !features ||
      features.length === 0
    ) {
      return sendResponse(res, 405, "error", "All Fields Are Required", null);
    }

    
    vehicleToUpdate.regNo = regNo;
    vehicleToUpdate.regCity = regCity;
    vehicleToUpdate.yearOfModel = yearOfModel;
    vehicleToUpdate.carTypeID = carTypeID;
    vehicleToUpdate.carModelID = carModelID;
    vehicleToUpdate.color = color;
    vehicleToUpdate.transmission = transmission;
    vehicleToUpdate.engineCapacity = engineCapacity;
    vehicleToUpdate.chasisNo = chasisNo;
    vehicleToUpdate.engineNo = engineNo;
    vehicleToUpdate.rateWithDriver = rateWithDriver;
    vehicleToUpdate.rateWithoutDriver = rateWithoutDriver;
    vehicleToUpdate.discountWeek = discountWeek;
    vehicleToUpdate.discountMonth = discountMonth;
    vehicleToUpdate.fuelType = fuelType;
    vehicleToUpdate.features = features;

    await vehicleToUpdate.save();

    sendResponse(res, 200, "success", "Vehicle Updated Successfully", vehicleToUpdate);
  } catch (error) {
    sendResponse(res, 500, "error", "Internal Server Error", error);
  }
};



//! DELETE VEHICLE

const deleteVehicle = async (req, res) => {
  try {
    const { vehicleID } = req.body;


    const vehicleToDelete = await vehicle.findById(vehicleID);
    if (!vehicleToDelete) {
      return sendResponse(res, 404, "error", "Vehicle Not Found", null);
    }


    await vehicle.findByIdAndDelete(id);

    sendResponse(res, 200, "success", "Vehicle Deleted Successfully", null);
  } catch (error) {
    sendResponse(res, 500, "error", "Internal Server Error", error);
  }
};








//! ---------- CAR TYPES ----------

//! ADD CAR TYPE
const addCarType = async (req, res) => {
  try {
    const { typeName } = req.body;

    if (typeName === "")
      return sendResponse(res, 405, "error", "Please Write A Type Name!", null);

    const newType = await typeModel({
      typeName,
    });

    await newType.save();

    sendResponse(res, 200, "success", "Car Type Added Successfully", newType);
  } catch (error) {
    sendResponse(res, 500, "error", "Internal Server Error", error);
  }
};

//! ALL CAR TYPES

const allCarTypes = async (req, res) => {
  try {
    const allCarTypesFetch = await typeModel.find();

    sendResponse(res, 200, "success", "All Car Types", allCarTypesFetch);
  } catch (error) {
    sendResponse(res, 500, "error", "Internal Server Error", error);
  }
};

//! SINGLE CAR TYPE

const singleCarType = async (req, res) => {
  try {
    const { typeID } = req.body;

    const singleCarTypeFetch = await typeModel.findOne({
      _id: typeID,
    });

    sendResponse(res, 200, "success", "Single Car Type", singleCarTypeFetch);
  } catch (error) {
    sendResponse(res, 500, "error", "Internal Server Error", error);
  }
};

//! EDIT CAR TYPE

const editCarType = async (req, res) => {
  try {
    const { typeID, typeName } = req.body;

    const singleCarTypeFetch = await typeModel.findOne({
      _id: typeID,
    });

    singleCarTypeFetch.typeName = typeName;

    await singleCarTypeFetch.save();

    sendResponse(
      res,
      200,
      "success",
      "Edited Successfully",
      singleCarTypeFetch
    );
  } catch (error) {
    sendResponse(res, 500, "error", "Internal Server Error", error);
  }
};

//! DELETE TYPE

const deleteCarType = async (req, res) => {
  try {
    const { typeID } = req.body;

    await typeModel.findByIdAndDelete({
      _id: typeID,
    });

    sendResponse(res, 200, "success", "Deleted Successfully", null);
  } catch (error) {
    sendResponse(res, 500, "error", "Internal Server Error", error);
  }
};

//! --------- CAR MODELS -----------

//! ADD CAR MODELS

const addCarModel = async (req, res) => {
  try {
    const { modelName, carTypeID } = req.body;

    if (modelName === "" || carTypeID === "")
      return sendResponse(
        res,
        204,
        "error",
        "Please Write A Model Name!",
        null
      );

    const newModel = await vehicleModel({
      modelName,
      carTypeID,
    });

    await newModel.save();

    sendResponse(res, 200, "success", "Car Model Added Successfully", newModel);
  } catch (error) {
    sendResponse(res, 500, "error", "Internal Server Error", error);
  }
};

//! GET ALL MODELS

const getAllModels = async (req, res) => {
  try {
    const { carTypeID } = req.body;

    const allModels = await vehicleModel.find({
      carTypeID: carTypeID,
    });

    sendResponse(res, 200, "success", "All Vehicles Model", allModels);
  } catch (error) {
    sendResponse(res, 500, "error", "Internal Server Error", error);
  }
};

//! SINGLE MODEL DETAIL

const singleModelDetails = async (req, res) => {
  try {
    const { singleModelID } = req.body;

    const singleModelFetch = await vehicleModel.findOne({
      _id: singleModelID,
    });

    sendResponse(res, 200, "success", "Single Model Details", singleModelFetch);
  } catch (error) {
    sendResponse(res, 500, "error", "Internal Server Error", error);
  }
};

//! EDIT MODEL DETAILS

const editModelDetails = async (req, res) => {
  try {
    const { singleModelID, modelName } = req.body;

    const singleModelFetch = await vehicleModel.findOne({
      _id: singleModelID,
    });

    singleModelFetch.modelName = modelName;

    singleModelFetch.save();

    sendResponse(res, 200, "success", "Updated Successfully", singleModelFetch);
  } catch (error) {
    sendResponse(res, 500, "error", "Internal Server Error", error);
  }
};

//! DELETE MODEL DETAILS

const deleteModelDetails = async (req, res) => {
  try {
    const { singleModelID } = req.body;

    await vehicleModel.findByIdAndDelete({
      _id: singleModelID,
    });

    sendResponse(res, 200, "success", "Deleted Successfully", null);
  } catch (error) {
    sendResponse(res, 500, "error", "Internal Server Error", error);
  }
};

//! --------CAR COLOR--------

//! ADD CAR COLOR

const addCarColor = async (req, res) => {
  try {
    const { colorName } = req.body;

    if (colorName === "")
      return sendResponse(
        res,
        204,
        "error",
        "Please Write A Color Name!",
        null
      );

    const newcolorModel = await colorModel({
      colorName,
    });

    await newcolorModel.save();

    sendResponse(
      res,
      200,
      "success",
      "Car Color Added Successfully",
      newcolorModel
    );
  } catch (error) {
    sendResponse(res, 500, "error", "Internal Server Error", error);
  }
};

//! GET ALL COLOR

const getAllColor = async (req, res) => {
  try {
    const allColor = await colorModel.find();

    sendResponse(res, 200, "success", "All Vehicles Color", allColor);
  } catch (error) {
    sendResponse(res, 500, "error", "Internal Server Error", error);
  }
};

//! SINGLE COLOR DETAIL

const singleColorDetail = async (req, res) => {
  try {
    const { colorID } = req.body;

    const singleColorFetch = await colorModel.findOne({
      _id: colorID,
    });

    sendResponse(res, 200, "success", "Single Color Details", singleColorFetch);
  } catch (error) {
    sendResponse(res, 500, "error", "Internal Server Error", error);
  }
};

//! EDIT COLOR DETAILS

const editColorDetail = async (req, res) => {
  try {
    const { colorID, colorName } = req.body;

    const singleColorFetch = await colorModel.findOne({
      _id: colorID,
    });

    singleColorFetch.colorName = colorName;

    singleColorFetch.save();

    sendResponse(res, 200, "success", "Updated Successfully", singleColorFetch);
  } catch (error) {
    sendResponse(res, 500, "error", "Internal Server Error", error);
  }
};

//! DELETE COLOR DETAILS

const deleteColorDetail = async (req, res) => {
  try {
    const { colorID } = req.body;

    await colorModel.findByIdAndDelete({
      _id: colorID,
    });

    sendResponse(res, 200, "success", "Deleted Successfully", null);
  } catch (error) {
    sendResponse(res, 500, "error", "Internal Server Error", error);
  }
};

//! --------CAR FEATURE--------

//! ADD CAR FEATURE

const addCarFeature = async (req, res) => {
  try {
    const { featureName } = req.body;

    if (featureName === "")
      return sendResponse(
        res,
        204,
        "error",
        "Please Write A Color Name!",
        null
      );

    const newFeatureModel = await featureModel({
      featureName,
    });

    await newFeatureModel.save();

    sendResponse(
      res,
      200,
      "success",
      "Car Feature Added Successfully",
      newFeatureModel
    );
  } catch (error) {
    sendResponse(res, 500, "error", "Internal Server Error", error);
  }
};

//! GET ALL FEATURES

const getAllFeatures = async (req, res) => {
  try {
    const allFeatures = await featureModel.find();

    sendResponse(res, 200, "success", "All Vehicles Features", allFeatures);
  } catch (error) {
    sendResponse(res, 500, "error", "Internal Server Error", error);
  }
};

//! SINGLE FEATURE DETAIL

const singleFeatureDetails = async (req, res) => {
  try {
    const { featureID } = req.body;

    const singleColorFetch = await featureModel.findOne({
      _id: featureID,
    });

    sendResponse(res, 200, "success", "Single Color Details", singleColorFetch);
  } catch (error) {
    sendResponse(res, 500, "error", "Internal Server Error", error);
  }
};

//! EDIT FEATURE DETAILS

const editFeatureDetail = async (req, res) => {
  try {
    const { featureID, featureName } = req.body;

    const singleFeatureFetch = await featureModel.findOne({
      _id: featureID,
    });

    singleFeatureFetch.featureName = featureName;

    singleFeatureFetch.save();

    sendResponse(
      res,
      200,
      "success",
      "Updated Successfully",
      singleFeatureFetch
    );
  } catch (error) {
    sendResponse(res, 500, "error", "Internal Server Error", error);
  }
};

//! DELETE FEATURE DETAILS

const deleteFeature = async (req, res) => {
  try {
    const { featureID } = req.body;

    await featureModel.findByIdAndDelete({
      _id: featureID,
    });

    sendResponse(res, 200, "success", "Deleted Successfully", null);
  } catch (error) {
    sendResponse(res, 500, "error", "Internal Server Error", error);
  }
};

module.exports = {
  getAllVehicles,
  addCarModel,
  addCarType,
  getAllModels,
  singleModelDetails,
  editModelDetails,
  deleteModelDetails,
  allCarTypes,
  singleCarType,
  editCarType,
  deleteCarType,
  addCarColor,
  getAllColor,
  singleColorDetail,
  editColorDetail,
  deleteColorDetail,
  addCarFeature,
  getAllFeatures,
  singleFeatureDetails,
  editFeatureDetail,
  deleteFeature,
  addVehicle,
  singleVehicle,
  editVehicle,
  deleteVehicle
};
