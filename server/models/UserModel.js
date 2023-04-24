const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  income: { type: String, required: true },
  city: { type: String, required: true },
  car: { type: String, required: true },
  quote: { type: String, required: true },
  phone_price: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
