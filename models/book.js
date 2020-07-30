const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const BookSchema = new Schema({
    title: String,
    body: String,
    date: {
        type: Date,
        default: Date.now()
    }
});

// Model
const Book = mongoose.model('Book', BookSchema);

module.exports =  Book;