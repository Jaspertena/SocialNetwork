const router = require('express').Router();
const {
  getThoughts,
  getSingleThoughts,
  createThoughts,
  updateThoughts,
  deleteThoughts,
} = require('../../controllers/ThoughtsController.js');

router.route('/').get(getThoughts).post(createThoughts);
router.route("/:ThoughtsId").get(getSingleThoughts).put(updateThoughts);
router.route("/:ThoughtsId").delete(deleteThoughts);

module.exports = router;