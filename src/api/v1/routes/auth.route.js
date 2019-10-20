const express = require('express');
const validate = require('express-validation');

const controller = require('./../controllers/auth.controller');
const {
  userLogin, doctorLogin, nurseLogin, adminLogin, pharmaLogin, userSignup,
} = require('../validations/auth.validation');

const router = express.Router();

/**
 * @swagger
 * /auth/admin/login:
 *   post:
 *     tags:
 *       - Auth
 *     description: Admin login.
 *     operationId: adminLogin
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *        - name: email
 *          required: true
 *          description: Admin email address
 *        - name: password
 *          required: true
 *          description: Admin email address
  *     responses:
 *       200:
 *         description: Successfully listed.
 *       400:
 *         description: Invalid input.
 *         schema:
 *       500:
 *         description: Internal error.
 *         schema:
 */
router.post('/admin/login', validate(adminLogin), controller.adminLogin);
/**
 * @swagger
 * /auth/pharma/login:
 *   post:
 *     tags:
 *       - Auth
 *     description: Pharmacy login.
 *     operationId: pharmaLogin
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
  *     responses:
 *       200:
 *         description: Successfully listed.
 *       400:
 *         description: Invalid input.
 *         schema:
 *       500:
 *         description: Internal error.
 *         schema:
 */
router.post('/pharma/login', validate(pharmaLogin), controller.pharmaLogin);
/**
 * @swagger
 * /auth/pharma/login:
 *   post:
 *     tags:
 *       - Auth
 *     description: Doctor login.
 *     operationId: doctorLogin
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
  *     responses:
 *       200:
 *         description: Successfully listed.
 *       400:
 *         description: Invalid input.
 *         schema:
 *       500:
 *         description: Internal error.
 *         schema:
 */
router.post('/doctor/login', validate(doctorLogin), controller.doctorLogin);
/**
 * @swagger
 * /auth/nurse/login:
 *   post:
 *     tags:
 *       - Auth
 *     description: Nurse login.
 *     operationId: nurseLogin
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
  *     responses:
 *       200:
 *         description: Successfully listed.
 *       400:
 *         description: Invalid input.
 *         schema:
 *       500:
 *         description: Internal error.
 *         schema:
 */
router.post('/nurse/login', validate(nurseLogin), controller.nurseLogin);
/**
 * @swagger
 * /auth/user/login:
 *   post:
 *     tags:
 *       - Auth
 *     description: User login.
 *     operationId: userLogin
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
  *     responses:
 *       200:
 *         description: Successfully listed.
 *       400:
 *         description: Invalid input.
 *         schema:
 *       500:
 *         description: Internal error.
 *         schema:
 */
router.post('/user/login', validate(userLogin), controller.userLogin);
/**
 * @swagger
 * /auth/user/signup:
 *   post:
 *     tags:
 *       - Auth
 *     description: User Signup.
 *     operationId: userSignup
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
  *     responses:
 *       200:
 *         description: Successfully listed.
 *       400:
 *         description: Invalid input.
 *         schema:
 *       500:
 *         description: Internal error.
 *         schema:
 */
router.post('/user/signup', validate(userSignup), controller.userSignup);


module.exports = router;
