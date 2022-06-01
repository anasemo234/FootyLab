const express = require('express');
const req = require('express/lib/request');
const writeRouter = express.Router();
const Write = require('../models/write');

// === Index === //
writeRouter.get('/', (req, res) => {
    Write.find({}, (error, allWrites) => {
        res.render('index.ejs', {
            writes: allWrites,
        });
    });
});


// === New === //
writeRouter.get('/new', (req, res) => {
    res.render('new.ejs');
});


// === Delete === //
writeRouter.delete('/:id', (req, res) => {
    Write.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/writes')
    })
})



// === Update === //
writeRouter.put('/:id', (req, res) => {
    Write.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        } ,
        (error, updatedWrite) => {
            res.redirect(`/writes/${req.params.id}`)
        }
    )
})


// === Create === //
writeRouter.post('/', (req, res) => {
    Write.create(req.body, (error, createdWrite) => {
        res.redirect('/writes');
    });
});




// === Edit === //
writeRouter.get('/:id/edit', (req, res) => {
    Write.findById(req.params.id, (error,  foundWrite) => {
        res.render('edit.ejs', {
            write: foundWrite,
        })
    })
})






// === Show === //
writeRouter.get('/:id', (req, res) => {
    Write.findById(req.params.id, (err, foundWrite) => {
        res.render('show.ejs', {
            write: foundWrite,
        })
    })
})




module.exports = writeRouter;