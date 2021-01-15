const {Router} = require('express');
const UserController = require('./controllers/UserController');
const SearchUserController = require('./controllers/SearchUserController');

const routes = Router();

routes.get('/users', UserController.listAllUsers);
routes.post('/users', UserController.storeUser);
routes.post('/search', SearchUserController.index);

module.exports = routes;