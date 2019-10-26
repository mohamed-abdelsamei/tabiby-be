const express = require('express');

const router = express.Router();
/**
 * @swagger
 * /user:
 *   get:
 *     tags:
 *       - User
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
/**
 * @swagger
 * /user/me:
 *  get:
 *    tags:
 *      - User
 */

/**
* @swagger
* /user/login:
*  get:
*    tags:
*      - User
*/
/**
* @swagger
* /user/signup:
*  post:
*    tags:
*      - User
*/
/**
* @swagger
* /user/{username}:
*  get:
*    tags:
*      - User
*/
/**
* @swagger
* /user/{username}:
*  put:
*    tags:
*      - User
*/
/**
* @swagger
* /user/{username}:
*  delete:
*    tags:
*      - User
*/
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;
