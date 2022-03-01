const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const userRoutes = require('./routes/user.routes');
const listingRoutes = require('./routes/listing.routes');

require('dotenv').config();

const uri = process.env.ATLAS_URI;
const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(uri);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Mongoose database is connected succesfully');
})

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes)
app.use('/listings')

app.listen(port, () => {
    console.log(`Server is running in http://localhost:${port}`);
});