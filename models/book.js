const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const BookSchema = new Schema({
    titleweb: String,
    author: String,
    pricecanada: String,
    formatname: String,
    flapcopy: String,
    authorbio: String, 
    isbn: String, 
    date: {
        type: Date,
        default: Date.now()
    }
});

// Model
const Book = mongoose.model('Book', BookSchema);

module.exports =  Book;