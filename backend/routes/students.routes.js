const route = require('express').Router();

const { getall, getbyId, update, create, remove } = require('../services/student.services');

route.get('/', getall);
route.get('/:id', getbyId);
route.put('/:id', update);
route.delete('/:id', remove);
route.post('/', create);

module.exports = route;