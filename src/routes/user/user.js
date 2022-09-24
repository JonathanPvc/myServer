'use strict'

const express = require('express');

const User = require('../../controllers/user/user');

const router = express.Router();

router.post('/save', User.save);

router.get('/user', User.getUser);

router.delete('/delete/:id', User.delete);

module.exports = router;