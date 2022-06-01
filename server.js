// === Dependencies ===//
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Write = require('./models/write');
const methodOverride = require('method-override');
require('dotenv').config();

// === Database Connection === //
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


// === Middleware === //
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))



// === Database Connection === //
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running'));
db.on('connected', () => console.log('mongo connected'));
db.on('error', () => console.log('mongo disconnected'));



// === Index === //
app.get('/writes', (req, res) => {
    Write.find({}, (error, allWrites) => {
        res.render('index.ejs', {
            writes: allWrites,
        });
    });
});


// === New === //
app.get('/writes/new', (req, res) => {
    res.render('new.ejs');
});


// === Delete === //
app.delete('/writes/:id', (req, res) => {
    Write.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/writes')
    })
})


// === Create === //
app.post('/writes', (req, res) => {
    Write.create(req.body, (error, createdWrite) => {
        res.redirect('/writes');
    });
});




// === Edit === //
app.get('/writes/:id/edit', (req, res) => {
    Write.findById(req.params.id, (error,  foundWrite) => {
        res.render('edit.ejs', {
            write: foundWrite,
        })
    })
})






// === Show === //
app.get('/writes/:id', (req, res) => {
    Write.findById(req.params.id, (err, foundWrite) => {
        res.render('show.ejs', {
            write: foundWrite,
        })
    })
})


















// === Listener === ///
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`));