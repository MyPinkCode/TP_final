const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/User.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/list', user_controller.users_read);
router.post('/add', user_controller.user_create);
router.get('/:nom', user_controller.get_userByName);
router.put('/:login/update', user_controller.user_update);
router.delete('/:login/delete', user_controller.user_delete);

module.exports = router;