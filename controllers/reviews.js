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



module.exports = reviewRouter;