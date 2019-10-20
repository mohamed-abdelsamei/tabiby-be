const express = require('express');
const validate = require('express-validation');

const controller = require('./../controllers/clinic.controller');
const { create, findOne } = require('../validations/clinic.validation');

const router = express.Router();

/**
 * @swagger
 * /clinics:
 *   post:
 *     tags:
 *       - Clinic
 *     description: Create new Clinic.
 *     operationId: createClinic
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:

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
router.post('/', validate(create), controller.create);

/**
 * @swagger
 * /clinics:
 *   get:
 *     tags:
 *       - Clinic
 *     description: search for a clinics.
 *     operationId: searchClinic
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:

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
router.get('/', controller.find);
/**
 * @swagger
 * /clinics/{id}:
 *   get:
 *     tags:
 *       - Clinic
 *     description: find clinic By ID.
 *     operationId: findClinicById
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
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
router.get('/:id', validate(findOne), controller.findOne);
/**
 * @swagger
 * /clinics/{id}:
 *   put:
 *     tags:
 *       - Clinic
 *     description: uodate clinic by id.
 *     operationId: updateClinicById
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
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
router.put('/:id', controller.update);
/**
 * @swagger
 * /clinics/{id}:
 *   delete:
 *     tags:
 *       - Clinic
 *     description: delete clinic by id.
 *     operationId: deleteClinicById
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
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
router.delete('/:id', controller.remove);

/**
 * @swagger
 * /clinics/{id}/reservation:
 *   get:
 *     tags:
 *       - Clinic
 *     description: view clinic reservations.
 *     operationId: getReservations
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
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
router.post('/:id/reservation', (req, res, next) => { });

/**
 * @swagger
 * /clinics/{id}/reservation:
 *   post:
 *     tags:
 *       - Clinic
 *     description: create reservation.
 *     operationId: createReservation
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
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
router.post('/:id/reservation', (req, res, next) => { });

/**
 * @swagger
 * /clinics/{id}/reservation/{rid}:
 *   get:
 *     tags:
 *       - Clinic
 *     description: view reservation.
 *     operationId: getReservation
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
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
router.post('/:id/reservation/:rid', (req, res, next) => { });

/**
 * @swagger
 * /clinics/{id}/reservation/{rid}:
 *   put:
 *     tags:
 *       - Clinic
 *     description: update reservation.
 *     operationId: updateReservation
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
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
router.put('/:id/reservation/:rid', (req, res, next) => { });


/**
* @swagger
* /clinics/{id}/reservation/{rid}:
*   delete:
*     tags:
*       - Clinic
*     description: delete reservation.
*     operationId: deleteReservation
*     consumes:
*       - application/json
*     produces:
*       - application/json
*     parameters:
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

router.delete('/:id/reservation/:rid', (req, res, next) => { });

module.exports = router;
