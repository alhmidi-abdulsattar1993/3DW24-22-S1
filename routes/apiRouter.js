const express = require('express');
const userController = require('../controllers/usersController');
const router = express.Router();

exports.router = (function() {
    var router = express.Router();

router.get('/users', userController.getfindAll);//Working
router.get('/user/:id', userController.getUserByOne); // Working
router.post('/user/create', userController.findOrCreate);
router.get('/user/delete/:id', userController.deleteUser); //workin
router.post('/user/update', userController.updateUser);

return router;
})();

