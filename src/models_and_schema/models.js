const mongoose = require("mongoose");
const validator = require("validator");

// ----------Schema Creation---------------------

const generalSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    }
  },
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    minLength: 2,
    unique: true,
  }
});


// --------------------Model Creation --------------------------

const Generalmodel = new mongoose.model("GeneralEntrie", generalSchema);


module.exports = { Generalmodel };

