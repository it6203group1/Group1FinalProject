const mongoose = require('mongoose');

const picturesSchema = new mongoose.Schema({
  name: String,
  photoURL: String
}, { timestamps: true });

const picture = mongoose.model('picture', picturesSchema);

module.exports = picture;
