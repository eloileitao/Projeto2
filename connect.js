

const mongoose = require("mongoose")
var url ="mongodb+srv://admin:admin123@urbanshelfdb-zclat.mongodb.net/UrbanShelfDB";
mongoose.connect(url, {
  useNewUrlParser: true,
  useFindAndModify: false
})

mongoose.Promise = global.Promise

module.exports = mongoose;
