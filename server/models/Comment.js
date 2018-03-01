const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User").Schema;

const commentSchema = new Schema(
  {
    userId: {
      type:[Schema.Types.ObjectId],
      ref:'User'
    },
    rate: Number,
    comment: String,
    date: new Date()
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
