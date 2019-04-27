const mongoose = require('mongoose');

  const accountSchema = new mongoose.Schema({
    socialPlatform:  { type: String, required: true},
    userName:  { type: String, required: true},
    password:  { type: String, required: true}
  });

module.exports = mongoose.model('Account', accountSchema,'Accounts');