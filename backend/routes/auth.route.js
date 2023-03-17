let route = require('express').Router();

let { signIn } = require('../services/auth.services');

route.post('/teachers', signIn);

module.exports = route;