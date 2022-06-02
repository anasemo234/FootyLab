const mongoose = require('mongoose');

const writeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: String,
    img:  String,
    price: {type: Number, minimum: 0},
    qty: {type: Number, minimun: 0}
});


const Write = mongoose.model('Write', writeSchema);

module.exports = Write;