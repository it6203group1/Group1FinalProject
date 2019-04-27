const mongoose = require('mongoose');

  const postSchema = new mongoose.Schema({
    txtPost:{ type: String, required: true}
    
  });
  
module.exports = mongoose.model('post', postSchema,'socialTPost');
