const express = require('express');
const reviewRouter = express.Router();
const Review = require('../models/reviews');

reviewRouter.get('/', (req, res) => {
    Review.find({}, (err, foundReviews) => {
        res.render('reviews/index.ejs', {
            reviews: foundReviews
        });
    });
});


reviewRouter.post('/', (req, res) => {
    Review.create(req.body, (err, createReview) => {
        res.redirect('/reviews');
    });
});
  

module.exports = reviewRouter;