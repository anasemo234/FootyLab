// === Dependencies ===//
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Write = require('./models/write');
require('dotenv').config();

// === Database Connection === //
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


// === Middleware === //
app.use(express.urlencoded({ extended: true }));



// === Database Connection === //
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running'));
db.on('connected', () => console.log('mongo connected'));
db.on('error', () => console.log('mongo disconnected'));



// === Index === //
app.get('/writes', (req, res) => {
    res.send('index');
})


// === New === //
app.get('/writes/new', (req, res) => {
    res.render('new.ejs');
});

// === Create === //
app.post('/writes', (req, res) => {
    res.send(req.body);
})





















// === Listener === ///
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`));