const UserController = require("../controllers/user.controller");
const router = require("express").Router();

router.get("/users", UserController.getUser);
router.post("/user", UserController.createUser);
router.delete("/user", UserController.deleteUser);
router.put("/user", UserController.editUser);

/**
 * @swagger
 * /api/birthday-notification/users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Success update user
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 0
 *                       first_name:
 *                         type: string
 *                         example: Abraham
 *                       last_name:
 *                         type: string
 *                         example: Sholeh
 *                       lat:
 *                         type: string
 *                         example: -6.202394
 *                       long:
 *                         type: string
 *                         example: 106.652710
 *                       email:
 *                         type: string
 *                         example: "abrahamsholeh@gmail.com"
 *                       sent_at:
 *                         type: date
 *                         example: 2022-12-03 00:00:00
 *                       birth_date:
 *                         type: date
 *                         example: 2022-12-03 00:00:00
 *                       created_at:
 *                         type: date
 *                         example: 2022-12-03 00:00:00
 *                       updated_at:
 *                         type: date
 *                         example: 2022-12-03 00:00:00
 *                       deleted_at:
 *                         type: date
 *                         example: null
 */

/**
 * @swagger
 * /api/birthday-notification/user:
 *   post:
 *     summary: Create a JSONPlaceholder user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                       first_name:
 *                         type: string
 *                         example: Abraham
 *                       last_name:
 *                         type: string
 *                         example: Sholeh
 *                       lat:
 *                         type: string
 *                         example: -6.202394
 *                       long:
 *                         type: string
 *                         example: 106.652710
 *                       email:
 *                         type: string
 *                         example: "abrahamsholeh@gmail.com"
 *                       sent_at:
 *                         type: date
 *                         example: null
 *                       birth_date:
 *                         type: date
 *                         example: 2022-12-03 00:00:00
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Add user successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 0
 *                       first_name:
 *                         type: string
 *                         example: Abraham
 *                       last_name:
 *                         type: string
 *                         example: Sholeh
 *                       lat:
 *                         type: string
 *                         example: -6.202394
 *                       long:
 *                         type: string
 *                         example: 106.652710
 *                       email:
 *                         type: string
 *                         example: "abrahamsholeh@gmail.com"
 *                       sent_at:
 *                         type: date
 *                         example: 2022-12-03 00:00:00
 *                       birth_date:
 *                         type: date
 *                         example: 2022-12-03 00:00:00
 *                       created_at:
 *                         type: date
 *                         example: 2022-12-03 00:00:00
 *                       updated_at:
 *                         type: date
 *                         example: 2022-12-03 00:00:00
 *                       deleted_at:
 *                         type: date
 *                         example: null
 */

/**
 * @swagger
 * /api/birthday-notification/user:
 *   put:
 *     summary: Create a JSONPlaceholder user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                       id:
 *                         type: string
 *                         example: 1
 *                       first_name:
 *                         type: string
 *                         example: Abraham
 *                       last_name:
 *                         type: string
 *                         example: Sholeh
 *                       lat:
 *                         type: string
 *                         example: -6.202394
 *                       long:
 *                         type: string
 *                         example: 106.652710
 *                       email:
 *                         type: string
 *                         example: "abrahamsholeh@gmail.com"
 *                       sent_at:
 *                         type: date
 *                         example: null
 *                       birth_date:
 *                         type: date
 *                         example: 2022-12-03 00:00:00
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Add user successfully
 *                 data:
 *                     type: object
 *                     properties:
 *                       first_name:
 *                         type: string
 *                         example: Abraham
 *                       last_name:
 *                         type: string
 *                         example: Sholeh
 *                       lat:
 *                         type: string
 *                         example: -6.202394
 *                       long:
 *                         type: string
 *                         example: 106.652710
 *                       email:
 *                         type: string
 *                         example: "abrahamsholeh@gmail.com"
 *                       sent_at:
 *                         type: date
 *                         example: 2022-12-03 00:00:00
 *                       birth_date:
 *                         type: date
 *                         example: 2022-12-03 00:00:00
 *                       created_at:
 *                         type: date
 *                         example: 2022-12-03 00:00:00
 *                       updated_at:
 *                         type: date
 *                         example: 2022-12-03 00:00:00
 *                       deleted_at:
 *                         type: date
 *                         example: null
 */

/**
 * @swagger
 * /api/birthday-notification/user:
 *   delete:
 *     summary: Create a JSONPlaceholder user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                       id:
 *                         type: string
 *                         example: 1
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Success Delete User
 */

module.exports = router;
