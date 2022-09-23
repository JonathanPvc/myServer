'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    name : String,
    lastname: String,
    typedocument: String,
    numberdocument : Number,
    state : String,
    sex : String,
    date: {type: Date, default: Date.now},

});

module.exports = mongoose.model('User', UserSchema);