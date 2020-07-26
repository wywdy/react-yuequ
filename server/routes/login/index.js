const express = require("express");
const userDB = require("../../db/user");

let router = express.Router();

//登录接口
router.post("/",(req,res)=>{

    //已经登录就不需要往下走了
    if (req.session.login) {
      res.send({
        code : 2,
        msg : "已经登录，请退出之后再登录"
      });
      return;
    }
  
    let {user,pwd} = req.body;
    //验证数据有效性
    if (!user || !pwd){
      res.send({
        code : 1,
        msg : "数据无效，请检查后再注册。"
      });
      return;
    }
  
    //验证用户与密码
    // if (!/^[\w\u4e00-\u9fa5\uac00-\ud7ff\u0800-\u4e00\-]{2,7}$/.test(user) || !/^[\w<>,.?|;':"{}!@#$%^&*()\/\-\[\]\\]{6,18}$/.test(pwd)){
    //   res.send({
    //     code : 2,
    //     msg : "用户名或密码不符合格式"
    //   });
    //   return;
    // }
    
    // 如果数据有效,格式正确,才开始根据用户名在userDB中查找
    userDB.findOne({user})
      .then(data=>{
        if (data){
          //有这个用户
          if (data.pwd === pwd){
            //写入session
            req.session.login = data;
  
            //返回前端
            res.send({
              code : 0,
              msg : "登录成功"
            });
  
        
          }else{
            res.send({
              code : 2,
              msg : "密码错误！"
            })
          }
        }else{
          //没有这个用户
          res.send({
            code : 1,
            msg : "用户不存在！"
          })
        }
      })
      .catch(e=>{
        res.send({
          code : 4,
          msg : "服务器错误~请稍后再试"
        })
      })
  })

module.exports = router;