const mongoose = require('mongoose');


const adSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  location: { type: String },
  price: { type: Number }

});

module.exports = mongoose.model('Ad', adSchema, 'ads');
