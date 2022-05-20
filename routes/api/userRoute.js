const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/UserController.js');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/Users/:userId
router
  .route('/:UserId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);


module.exports = router;
