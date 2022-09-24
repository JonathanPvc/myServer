'use strict'
const Pet = require('../../controllers/pet/pet.js');

const express = require('express');

const router = express.Router();

router.post('/save', Pet.save);

router.get('/pet', Pet.getPet);

router.delete('/delete/:id', Pet.delete);

module.exports = router;