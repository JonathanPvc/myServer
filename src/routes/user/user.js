'use strict'

const express = require('express');

const User = require('../../controllers/user/user');

const router = express.Router();

router.post('/', User.save);

router.get('/', User.getUser);

router.delete('/:id', User.delete);

module.exports = router;