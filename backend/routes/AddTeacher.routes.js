const route = require('express').Router();

const { create } = require('../services/teacher.services');

route.post('/', create);

module.exports = route;