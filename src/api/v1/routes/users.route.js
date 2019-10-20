const express = require('express');

const router = express.Router();
/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - Users
 *     description: find all users.
 *     operationId: findUsers
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
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
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;
