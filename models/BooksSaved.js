const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: false},
    description: {type: String, required: false},
    link: {type: String, required: false},
    thumbnail: {type: String, required: false}
});

const BooksSaved = mongoose.model("BooksSaved", bookSchema);

module.exports = BooksSaved;