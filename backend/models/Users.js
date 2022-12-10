const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username бөглөнө үү"],
    minLength: [2, "2 тэмдэгтээс багагүй байх"],
    maxLength: [100, "100 тэмдэгтээс хэтрэхгүй"],
  },
  // image: {
  //   type: String,
  //   required: [true, "Заавал бөглөнө үү"],
  // },
  gmail: {
    type: String,
    minLength: [2, "2 тэмдэгтээс багагүй байх"],
    maxLength: [100, "100 тэмдэгтээс хэтрэхгүй"],
    index: {
      unique: true,
    },
  },
  password: {
    type: String,
    maxLen: 15,
    minLen: 8,
    required: [true, "Заавал бөглөнө үү"],
  },
},
  { timestamps: true });


const User = model("Users", userSchema);

module.exports = User;