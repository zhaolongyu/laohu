//app.js
//1:加载模块 express pool.js
const express = require("express");
const pool = require("./pool");
const cors = require("cors");
const bodyParser = require("body-parser");

//2:创建服务器端对象
var app = express();
//3:监听 3000
app.listen(3000);
//4:指定静态目录  public 
app.use(express.static("public"));

//5.跨域问题  引入
app.use(cors({
  origin:["http://127.0.0.1:8080","http://localhost:8080"],
  credentials:true
}));

//6.1下载模块 express-session 配置
const session = require("express-session");
app.use(session({
  secret:"128位随机字符",    //安全字符串
  resave:false,             //每次请求是否都更新数据
  saveUninitialized:true,   //初始化保存数据
  cookie:{                  //保存的时间
    maxAge:1000*60*60*8      
  }
}));

// post 请求
app.use(bodyParser.urlencoded({
  extended:false
}));

//功能一:home 组件轮播图片
app.get("/imglist",(req,res)=>{
  var sql = "select * from zl_imagelist"
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    // console.log(req.session.uid)
    res.send(result); 
  })
});

//功能二:home  商品详细信息
  app.get("/laptop",(req,res)=>{
    var lid = req.query.lid;
    var sql = "select * from zl_laptop where lid=?"
    pool.query(sql,[lid],(err,result)=>{
      if(err)throw err; 
      res.send(result); 
    })
  });

//功能三:loginList  注册
app.post("/loginList",(req,res)=>{
   var $uname=req.body.uname;
   var $upwd=req.body.upwd;
   var sql = "INSERT INTO zl_login VALUES(null,?,md5(?));"
   pool.query(sql,[$uname,$upwd],(err,result)=>{
     if(err)throw err;
  if(result.affectedRows>0)
    res.send({code:1,msg:'注册成功'}); 
  })
});


//功能四:loginOu  登录
app.get("/loginOu",(req,res)=>{
  var $uname=req.query.uname;
  var $upwd=req.query.upwd;
  var sql = "select id from zl_login where uname=? and upwd=md5(?)"
  pool.query(sql,[$uname,$upwd],(err,result)=>{
    if(err)throw err;
    if(result.length==0){
      res.send({code:-1,msg:'登录失败'})
    }
    else{
      var id = result[0].id;
      req.session.uid = id;       //全局uid
      // console.log(req.session.uid)
      res.send({code:1,msg:result})
    }
 })
});

//功能五:HomeImgUrl  home图片列表
app.get("/HomeImgUrl",(req,res)=>{
  var sql = "select * from zl_imgBody"
  pool.query(sql,(err,result)=>{
    if(err)throw err;
      res.send(result);
  })
});


//功能六:HomeImg  home图片列表  分页查询cart body
app.get("/HomeImg",(req,res)=>{
  //1:参数 pno 页码 pageSize 页大小
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  //2:设置默认值 
  if(!pno){pno=1}
  if(!pageSize){pageSize=8}
  //3:sql语句  SELECT * FROM zl_imgbody LIMIT 0,7
  var sql = " SELECT * FROM zl_imgbody LIMIT ?,?";
  //4:offset 行偏移量  
  var offset = (pno-1)*pageSize;
  //5:页大小造型
  pageSize = parseInt(pageSize);
  pool.query(sql,[offset,pageSize],(err,result)=>{
      if(err)throw err;
      res.send({code:200,data:result});
  });
})

//功能七:cartlistimg 
app.get("/cartlistimg",(req,res)=>{
  var lid = req.query.lid;
  var sql = "select * from zl_laptop_pic where laptop_id=?"
  pool.query(sql,[lid],(err,result)=>{
    if(err)throw err;
      res.send(result);
  })
});


//功能八:cartlistimgSrc 
app.get("/cartlistimgSrc",(req,res)=>{
  var lid = req.query.lid;
  var sql = "select * from zl_laptop_details where lid=?"
  pool.query(sql,[lid],(err,result)=>{
    if(err)throw err;
      res.send(result);
  })
});



//功能9: cartIcon   插入购物车   未完成
app.post("/cartIcon",(req,res)=>{
  var uid = req.session.uid
  var lid = req.body.lid;
  // console.log(uid,lid)
  var sm = req.body.sm;
  var price = req.body.price;
  var title = req.body.title;
  var sql = "INSERT INTO zl_cart VALUES(null,?,?,?,?,?)"
  pool.query(sql,[uid,lid,sm,price,title],(err,result)=>{
    if(err)throw err;
      res.send(result);
  })
});

//功能10: cartIconlist  查询购物车
app.get("/cartIconlist",(req,res)=>{
  var uid = req.session.uid;
  //  console.log(uid)
   if(!uid){res.send({code:1,msg:"视频"});return}
  // console.log(req.session.uid)
  var sql = "select id,uid,pid,sm,price,title from zl_cart where uid = ?"
  pool.query(sql,[uid],(err,result)=>{
    if(err)throw err;
      res.send(result);
  })
});


//功能11: cartdete  查询购物车
app.get("/cartdete",(req,res)=>{
  var id = req.query.id;
   if(!id){res.send({code:1,msg:"没有"});return}
  var sql = "delete from zl_cart where id = ?"
  pool.query(sql,[id],(err,result)=>{
    if(err)throw err;
      res.send(result);
  })
});

// //功能 imgBodyS   home 中商品图片隐藏
// app.get("/imgBody",(req,res)=>{
//   var sql = "select imgUrl from zl_imgBody"
//   pool.query(sql,(err,result)=>{
//     if(err)throw err;
//       res.send(result)
//   })
// });