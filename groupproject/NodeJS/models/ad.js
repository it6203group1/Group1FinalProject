const mongoose = require('mongoose');

var Ad = mongoose.model('Ad',{
    name:{ type: String},
    description: { type: String},
    location: { type: String},
    price: {type: Number}
});

module.exports = { Ad };