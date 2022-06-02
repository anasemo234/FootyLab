const express = require('express');
const reviewRouter = express.Router();
const Review = require('../models/reviews');



// === Index === //
reviewRouter.get('/', (req, res) => {
    Review.find({}, (err, foundReviews) => {
        res.render('reviews/index.ejs', {
            reviews: foundReviews
        });
    });
});

// === Create === //
reviewRouter.post('/', (req, res) => {
    Review.create(req.body, (err, createReview) => {
        res.redirect('/reviews');
    });
});
  
// reviewRouter.get('/:id', (req, res) => {
//     Review.findById(req.params.id, (err, foundReview) => {
//         res.render('/reviews/show.ejs', {
//             review: foundReview
//         })
//     })
// })

module.exports = reviewRouter;