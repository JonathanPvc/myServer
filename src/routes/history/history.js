'use strict'

const express = require('express');

const History = require('../../controllers/history/history.js');

const router = express.Router();

router.post('/save', History.save);

router.get('/history', History.getHistory);

router.delete('/delete/:id', History.delete);

module.exports = router; 