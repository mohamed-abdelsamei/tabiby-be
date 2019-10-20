const express = require('express');

const router = express.Router();
const controller = require('./../controllers/speciality.controller');
/**
 * @swagger
 * /speciality:
 *   post:
 *     tags:
 *       - Speciality
 *     description: add new speciality.
 *     operationId: addSpeciality
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: Successfully listed.
 *         type: object
 *       400:
 *         description: Invalid input.
 *         schema:
 *       500:
 *         description: Internal error.
 *         schema:
 */
router.post('/', controller.create);
/**
 * @swagger
 * /speciality:
 *   get:
 *     tags:
 *       - Speciality
 *     description: find specialities.
 *     operationId: findAllSpecialities
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: Successfully listed.
 *         type: object
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
 * /speciality/{id}:
 *   get:
 *     tags:
 *       - Speciality
 *     description: find one speciality.
 *     operationId: findOneSpecialityById
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: Successfully listed.
*         type: object
 *       400:
 *         description: Invalid input.
 *         schema:
 *       500:
 *         description: Internal error.
 *         schema:
 */
router.get('/:id', controller.findOne);
/**
 * @swagger
 * /speciality/{id}:
 *   put:
 *     tags:
 *       - Speciality
 *     description: update one speciality.
 *     operationId: updateOneSpecialityById
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: Successfully listed.
 *         type: object
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
 * /speciality/{id}:
 *   delete:
 *     tags:
 *       - Speciality
 *     description: delete one speciality.
 *     operationId: deleteOneSpecialityById
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: Successfully listed.
 *         type: object
 *       400:
 *         description: Invalid input.
 *         schema:
 *       500:
 *         description: Internal error.
 *         schema:
 */
router.delete('/:id', controller.remove);

module.exports = router;
