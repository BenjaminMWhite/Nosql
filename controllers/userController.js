const User = require('../models/User');

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  updateUser(req,res){
  User.findOneAndUpdate({_id:req.params.id}, req.body)
  .then((dbUserData) =>{
    if (!dbUserData) {
    res.status(404)
    return}
  else res.json(dbUserData)
  });
  },
  deleteUser(req,res){
    User.findOneAndDelete({_id:req.params.id})
    .then((dbUserData) =>{
      if (!dbUserData) {
      res.status(404)
      return}
    else res.json(dbUserData)
    });
    },
    addFriend(req,res){
      User.findOneAndUpdate({_id:req.params.friendID}, {$push:{friends:req.params.friendID  } })
      .then((dbUserData) =>{
        if (!dbUserData) {
        res.status(404)
        return}
      else res.json(dbUserData)
      });
      },
      removeFriend(req,res){
        User.findOneAndUpdate({_id:req.params.id}, {$pull:{friends:req.params.friendID  } })
        .then((dbUserData) =>{
          if (!dbUserData) {
          res.status(404)
          return}
        else res.json(dbUserData)
        });
        }
};

