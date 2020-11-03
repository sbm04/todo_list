const express  = require('express');
const router = express.Router();

const likesController=require("../controllers/like_controller");


router.get('/users',likesController.userlike);
module.exports =router;