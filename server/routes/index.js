var express = require('express');
var router = express.Router();


/* 登录相关接口*/ 
router.use("/login",require('./login/index'));

/*注册相关的接口*/
router.use("/register",require('./register/index'));








module.exports = router;
