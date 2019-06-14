const express = require('express');

const router = express.Router();
const controller = require('./../controllers/speciality.controller');
/* GET users listing. */
router.post('/', controller.create);
router.get('/', controller.find);
router.get('/:id', controller.findOne);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
