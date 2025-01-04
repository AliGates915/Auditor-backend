const express = require('express');
const { getAllVehicles, addCarModel, addCarType, getAllModels, singleModelDetails, editModelDetails, deleteModelDetails, allCarTypes, singleCarType, editCarType, deleteCarType, addCarColor, getAllColor, singleColorDetail, editColorDetail, deleteColorDetail, addCarFeature, getAllFeatures, singleFeatureDetails, editFeatureDetail, deleteFeature, addVehicle, singleVehicle, editVehicle, deleteVehicle } = require('../controllers/vehicleController');


const router = express.Router();

//! VEHICLE ROUTERS
router.get('/', getAllVehicles)
router.post('/add-vehicle', addVehicle )
router.post('/single-vehicle', singleVehicle )
router.post('/edit-vehicle', editVehicle )
router.post('/delete-vehicle', deleteVehicle )





//! CAR TYPE ROUTERS
router.get('/all-types',allCarTypes )
router.post('/add-type',addCarType )
router.post('/single-type',singleCarType )
router.post('/edit-type',editCarType )
router.post('/delete-type',deleteCarType )




//! CAR MODEL ROUTERS

router.post('/add-model', addCarModel)
router.post('/all-model', getAllModels)
router.post('/single-model', singleModelDetails)
router.post('/edit-model', editModelDetails)
router.post('/delete-model', deleteModelDetails)

//! CAR COLOR ROUTERS

router.post('/add-color', addCarColor)
router.get('/all-colors', getAllColor)
router.post('/single-color', singleColorDetail)
router.post('/edit-color', editColorDetail)
router.post('/delete-color', deleteColorDetail)



//! CAR FEATURE ROUTERS

router.post('/add-feature', addCarFeature)
router.get('/all-features', getAllFeatures)
router.post('/single-feature', singleFeatureDetails)
router.post('/edit-feature', editFeatureDetail)
router.post('/delete-feature', deleteFeature)




module.exports = router