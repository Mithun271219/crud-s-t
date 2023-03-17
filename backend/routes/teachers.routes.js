let route = require('express').Router();

const { getall, getbyid, create, update, remove } = require('../services/teacher.services');

route.get('/', getall);
route.get('/:id', getbyid);
route.put('/:id', update);
route.delete('/:id', remove);

module.exports = route;