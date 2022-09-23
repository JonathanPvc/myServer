'use strict'

const express = require('express');

const History = require('../../controllers/history/history.js');

const router = express.Router();

router.post('/', History.save);

router.get('/', History.getHistory);

router.delete('/:id', History.delete);

module.exports = router;