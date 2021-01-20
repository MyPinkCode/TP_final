
// app.js

const express = require('express');

const user = require('./routes/User.route'); // Imports routes for the products
const app = express();
app.use(express.json());
// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://sarra:22898972@cluster0.vck4f.mongodb.net/users?retryWrites=true&w=majority';
mongoose
    .connect(dev_db_url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('DB connection successful');
    });



app.use('/user', user);

let port = 84;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});