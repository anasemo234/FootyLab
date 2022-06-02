// === Dependencies ===//
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Write = require('./models/write');
const methodOverride = require('method-override');
require('dotenv').config();

// === Database Connection === //
mongoose.connect(process.env.DATABASE_URL, {
    // useNewUrlParser: true,
    useUnifiedTopology: true
});


// === Middleware === //
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))
const writesController = require('./controllers/writes');
const reviewsController = require('./controllers/reviews');
app.use('/reviews', reviewsController);
app.use( '/writes', writesController);
app.use('/public', express.static("public"));


// === Database Connection === //
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running'));
db.on('connected', () => console.log('mongo connected'));
db.on('error', () => console.log('mongo disconnected'));


// app.get('/', (req, res) => {
//     res.render('index.ejs');
// });




















// === Listener === ///
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`));