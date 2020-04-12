// 引入模块
const express = require("express");
const mysql = require("mysql");
const bodyParser = require('body-parser');
const cors = require("cors");  //跨域

// 创建服务
var server = express();
server.listen(5500);
console.log("启动服务....");

// 创建连接池
var pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "shserver",
  port: 3306,
  connectionLimit:15
})

server.use(express.static('public'));

server.use(bodyParser.urlencoded({
	extended:false
}));

server.use(cors({
  origin:["http://127.0.0.1:8080","http://localhost:8080"],
  credentials:true
}))

server.get("/", (req, res) => { 
  res.send("hello world");
})

//首页-产品系列
server.get("/family", (req, res) => {
  var sql = "select id,name,pic from family";
  pool.query(sql, (err, result) => { 
    if (err) throw err;
    res.send({code:1,msg:'ok',data:result});
  })
})

//商品系列
server.get("/mall_family", (req, res) => {
  var sql = "select fid,fname,fdes,fpic from mall_family";
  pool.query(sql, (err, result) => { 
    if (err) throw err;
    res.send({code:1,msg:'ok',data:result});
  })
})

// 2：商品列表
server.get("/mall_list/", (req, res) => {
  var $fid = req.query.fid;
  var sql = "select lid,lname,lcname,lprice,lpic,l_title,l_subtitle,l_des from mall_list where family_id=?";
  pool.query(sql,[$fid],(err, result) => { 
    if (err) throw err;
    res.send({code:1,msg:'ok',data:result});
  })
})

// 3：商品详情
server.get("/mall_detail", (req, res) => {
  var $lid = req.query.lid;
  var sql = "select did,d_title,d_subtitle,dprice,dpic,dspic,dnum,d_series,d_fun,d_ncolor,d_meter,d_color,d_width,d_thick,d_height,d_bcolor,d_bmate,d_cmate,d_button,d_dial,d_ccolor,d_cshape,d_case_meta from mall_detail where list_id=?";
  pool.query(sql,[$lid],(err, result) => { 
    if (err) throw err;
    res.send({code:1,msg:'ok',data:result});
  })
})

// 4：添加购物车
server.post("/mall_cart", (req, res) => {
  var obj =req.body;
  
  var sql = "insert into mall_cart set ?";
  pool.query(sql,[obj],(err, result) => { 
    if (err) throw err;
    res.send(result);
  })
})