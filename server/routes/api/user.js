const express = require("express");
const debug = require("debug");
const router = express.Router();
const User = require("../../models/User");
const _ = require("lodash");

//Get All users
router.get("/users", function(req, res, next) {
  debug(`Retrieving all`);
  User.find(req.query)
    .then(allUsers => res.status(200).json(allUsers))
    .catch(e => res.status(500).json(e));
});

// Retrieve one
router.get("/:id", function(req, res, next) {
  debug(`Retrieving id: ${req.params.id}`);
  User.findById(req.params.id)
    .then(oneUser => res.status(200).json(oneUser))
    .catch(e => res.status(500).json(e));
});
/* U => UPDATE */
router.put("/:id", function(req, res, next) {
  // Get only the properties we need
  const model_properties = _.remove(
    Object.keys(User.schema.paths),
    k => !["_id", "__v", "created_at", "updated_at"].includes(k)
  );
  const updates = _.pick(req.body, model_properties);

  User.findByIdAndUpdate(req.params.id, updates)
    .then(newObj => {
      debug(`UPDATED: ${newObj._id}`);
      res.json({ message: "User updated successfully" });
    })
    .catch(e => res.status(500).json(e));
});

/* D => DELETE */
router.get("/delete/:id", function(req, res, next) {
  User.findByIdAndRemove(req.params.id)
    .then(() => res.status(200).json({ message: "removed" }))
    .catch(e => res.status(500).json(e));
});

module.exports = router;
