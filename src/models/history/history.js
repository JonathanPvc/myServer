'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HistorySchema = new Schema({

    temperature : String,
    weight: String,
    heart_rate : String,
    breathing_frequency : String,
    date_time: String,
    feeding : String,
    habitat : String,
    observation: String,
 
});

module.exports = mongoose.model('History', HistorySchema);