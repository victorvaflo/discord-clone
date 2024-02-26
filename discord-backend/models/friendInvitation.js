mongoose = require("mongoose");

const Schema = mongoose.Schema;

const friendInvitationSchema = new Schema({
  senderId: {
    type: Schema.Type.ObjectId,
    ref: "user",
  },
  receiverId: {
    type: Schema.Type.ObjectId,
    ref: "user",
  },
});

module.exports = mogoose.mode("FriendInvitation", friendInvitationSchema);
