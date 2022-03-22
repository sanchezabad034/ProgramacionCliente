const express = require("express");
const router = express.Router();
const adoptionsController = require('../controllers/adoptionsController');
const adoptionValidations = require("../validations/adoptionValidations");
router.get('/adoption', adoptionValidations.id,adoptionsController.getAdoption);
router.get('/adoptions', adoptionsController.getAdoptions);
router.post('/adoption', adoptionValidations.add,adoptionsController.postAdoption);
router.put('/adoption', adoptionValidations.update,adoptionsController.putAdoption);
router.delete('/adoption', adoptionValidations.id,adoptionsController.deleteAdoption);
router.get('/adoptionUser', adoptionsController.getAdoptionByUser); 

module.exports = router;