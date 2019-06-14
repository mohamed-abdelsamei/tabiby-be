const express = require('express');
const clinicsRouter = require('./clinics.route');
const usersRouter = require('./users.route');
const specialitiesRouter = require('./specialities.route');

const router = express.Router();

router.use('/clinics', clinicsRouter);
router.use('/users', usersRouter);
router.use('/speciality', specialitiesRouter);

module.exports = router;
