'use strict'
const Pet = require('../../controllers/pet/pet.js');

const express = require('express');

const router = express.Router();

router.post('/', Pet.save);

router.get('/', Pet.getPet);

router.delete('/:id', Pet.delete);

module.exports = router;