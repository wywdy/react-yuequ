
const express = require("express");
const userDB = require("../../db/user")

let router = express.Router();

router.post("/",(req,res)=>{
    let {user,pwd} = req.body;
      //验证用户与密码
  if (!/^[\w\u4e00-\u9fa5\uac00-\ud7ff\u0800-\u4e00\-]{2,7}$/.test(user) || !/^[\w<>,.?|;':"{}!@#$%^&*()\/\-\[\]\\]{6,18}$/.test(pwd)){
    res.send({
      code : 2,
      msg : "用户名或密码不符合规则"
    });
    return;
  }
  //检测用户名是否重复
  userDB.findOne({user})
    .then(data=>{
      /*
      * 如果没有发生错误
      *data如果有查到值(返回一个对象)，说明user重复
      *data如果没有查到（返回null），说明user不重复
      * */
      if (data){
        res.send({
          code : 3,
          msg : "用户名已存在"
        });
      }else{
        //用户名不存在，接着存数据到数据库
        userDB.create({user,pwd})
          .then(d=>{
            //走到这里说明注册成功
            res.send({
              code : 0,
              msg : "注册成功"
            });
          })
          .catch(e=>{
            res.send({
              code : 4,
              msg : "注册失败"
            });
          });
      }
    })
    //如果发生错误
    .catch(e=>{
      res.send({
        code : 4,
        msg : "服务器错误"
      });
    });

});












module.exports = router;