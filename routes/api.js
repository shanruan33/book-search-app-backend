const express = require('express');

const router = express.Router();

const Book = require('../models/book');

// Get all
router.get('/', (req, res) => {
    Book.find({})
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('Error: ', error);
        });
});

// Get one by id
// router.get('/:id', async(req, res) => {
//     try {
//         const book = await Book.find({ _id: req.params.id});
//         res.json({ book });
//     } catch (error) {
//         res.json({message: error});
//     }
// });

// Add one
router.post('/', (req, res) => {
    const data = req.body;

    const newBook = new Book(data);

    newBook.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        return res.json({
            msg: 'Your data has been saved!!!!!!'
        });
    });
});

// Delete one by id
router.delete('/:id', async (req, res) => {
    try {
        const deletedBook = await Book.deleteOne({ _id: req.params.id})
        res.json({message: "delete job status:" + deletedBook.ok })
    } catch (error) {
        res.json({message: error});
    }
});


module.exports = router;