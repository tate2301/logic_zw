const mongoose = require('mongoose')

const CategorySchema = mongoose.Schema(
    {
        "categoryName": String,
        "categoryDescription": String, 
        "categoryClass": String,  
        "tags": [String]  
      }
)

module.exports = mongoose.model('Category', CategorySchema)