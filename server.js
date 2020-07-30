// Step 0: if not production, then read .env
// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').config();
// }

// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080; // Step 1

const routes = require('./routes/api');

// Step 2
mongoose.connect('mongodb://localhost:27017/book-oup', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    // console.log('Mongoose is connected!!!!');
});

// treat requests as json requests
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


// HTTP request logger
app.use(morgan('tiny'));
app.use('/api/v1/book', routes);


app.listen(PORT, console.log(`Server is starting at ${PORT}`));