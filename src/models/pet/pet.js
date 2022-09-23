'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetSchema = new Schema({

    name : String,
    breed: String,
    sex : String,
    date: {type: Date, default: Date.now},

});

module.exports = mongoose.model('Pet', PetSchema);