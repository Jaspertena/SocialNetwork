//user details for user route
const { User, Thoughts } = require('../models');

module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find({})
    .populate({path: "thoughts", select:"-__v"})
    .select("-__v")
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.UserId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  createUser(req, res) {
    User.create(req.body)
    .then (user => res.status(200).json(user))
    .catch((err) => res.status(500).json(err));

  },
  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.UserId}, req.body,{new: true})
    .then (user => res.status(200).json(user))
    .catch((err) => res.status(500).json(err));
  },
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.UserId})
    .then (user => res.status(200).json(user))
    .catch((err) => res.status(500).json(err));
  },
  addFriend(req, res) {
    User.findByIdAndUpdate({ _id: req.params.UserId}, 
    {$addToSet:{friends:{_id: req.params.friendId}}},
    {new: true}
      )
    .then (user => res.status(200).json(user))
    .catch((err) => res.status(500).json(err));
  }

}
