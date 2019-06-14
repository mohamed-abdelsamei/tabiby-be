const express = require('express');

const router = express.Router();
const controller = require('./../controllers/clinic.controller');
/* GET users listing. */
router.post('/', controller.create);
router.get('/', controller.find);
router.get('/:id', controller.findOne);
router.put('/:id', controller.update);
router.put('/:id/speciality', controller.updateSpeciality);
router.delete('/:id', controller.remove);

module.exports = router;
