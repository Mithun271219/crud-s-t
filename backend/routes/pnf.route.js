const route = require('express').Router();
const { pageNotFount } = require('../services/pnf.services');

route.get('/', pageNotFount);
route.post('/', pageNotFount);
route.put('/', pageNotFount);
route.delete('/', pageNotFount);

module.exports = route;