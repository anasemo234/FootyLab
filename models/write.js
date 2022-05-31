const mongoose = require('mongoose');

const writeSchema = new mongoose.Schema({
    title: {type: String},
    entry: {type: String}
});


const Write = mongoose.model('Write', writeSchema);

module.exports = Write;