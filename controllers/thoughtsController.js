//controller detailsfor Thoughts Route
//controller detailsfor Thoughts Route
const { User, Thoughts } = require('../models');

module.exports = {
  // Get all users
  getThoughts(req, res) {
    Thoughts.find()
      .then((Thoughts) => res.json(Thoughts))
      .catch((err) => res.status(500).json(err));
  },

  getSingleThoughts(req, res) {
    Thoughts.findOne({ _id: req.params.thoughtsId })
      .select('-__v')
      .then((Thoughts) =>
        !thoughts
          ? res.status(404).json({ message: 'No thoughts with that ID' })
          : res.json(thoughts)
      )
      .catch((err) => res.status(500).json(err));
  },
},

createThoughts(req, res) {
    Thoughts.create(req.body)
      .then((Thoughts) => res.json(Thoughts))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a Thoughts
  deleteThoughts(req, res) {
    Thoughts.findOneAndDelete({ _id: req.params.ThoughtsId })
      .then((Thoughts) =>
        !Thoughts
          ? res.status(404).json({ message: 'No Thoughts with that ID' })
          : User.deleteMany({ _id: { $in: Thoughts.Users } })
      )
      .then(() => res.json({ message: 'Thoughts and Users deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a Thoughts
  updateThoughts(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.ThoughtsId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((Thoughts) =>
        !Thoughts
          ? res.status(404).json({ message: 'No Thoughts with this id!' })
          : res.json(Thoughts)
      )
      .catch((err) => res.status(500).json(err));
  },
};
