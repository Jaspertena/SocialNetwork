const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
} = require('../../controllers/UserController.js');

// /api/users
router.route('/').get(getUsers).post(createUser)

// /api/Users/:userId
router
  .route('/:UserId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

router.route(`/:UserId/freinds/:friendId`).post(addFriend);
module.exports = router;
