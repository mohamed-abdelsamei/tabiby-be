const express = require('express');
const validate = require('express-validation');

const router = express.Router();


/**
 * @swagger
 *  /reservation:
 *   get:
 *     summary: Get all reservations
 *     tags:
 *       -  Reservation
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
router.get('/reservation', (req, res, next) => { });

/**
 * @swagger
 *  /reservation:
 *   post:
 *     summary: Create a reservation
 *     tags:
 *       -  Reservation
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
router.post('/reservation', (req, res, next) => { });

/**
 * @swagger
 *  /reservation/{id}:
 *   get:
 *     summary: Find a reservation by ID
 *     tags:
 *       -  Reservation
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
router.get('/reservation/:id', (req, res, next) => { });

/**
 * @swagger
 *  /reservation/{id}:
 *   put:
 *     summary: Edit a reservation by ID
 *     tags:
 *       -  Reservation
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
router.put('/reservation/:id', (req, res, next) => { });


/**
* @swagger
*  /reservation/{id}:
*   delete:
*     summary: Delete a reservation by ID
*     tags:
*       -  Reservation
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

router.delete('/reservation/:id', (req, res, next) => { });

module.exports = router;
