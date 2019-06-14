const express = require('express');
const clinicsRouter = require('./clinics.route');
const usersRouter = require('./users.route');

const router = express.Router();

router.use('/clinics', clinicsRouter);
router.use('/users', usersRouter);

module.exports = router;
