var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  	host: '127.0.0.1',
  	user: 'root',
  	password: '*******',
  	database: 'AliPay',
  	port: '3306'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index', { title: '支付宝账单客户端' });
});

//创建一个connection
	connection.connect();
// 收集数据
router.post('/alipay', function(req, res, next) {
	
	res.header("Access-Control-Allow-Origin", "*");  
	res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    res.header("X-Powered-By",' 3.2.1')  
    res.header("Content-Type", "application/json;charset=utf-8");  


	var nextStep = 0;
	var billData = JSON.parse(req.body.bill);
	console.log(billData);
	
	// 插入数据
	
	for(var i =0;i<billData.length;i++){
		console.log(i);
		(function(i){
			connection.query("INSERT INTO sofar(id,bill) VALUES ("+ billData[i].id +",'" + billData[i].bill + "');",function (err, rows) {
				if(err){
					console.log(err);
					if(err.errno == 1062){
						nextStep = 1;
					}
					console.log("fail");
				}else{
					console.log("success");
				}
				console.log("-----------------");
			});
		}(i))
	}
	setTimeout(function(){
		res.send({msg:nextStep});
	},5000)
	
});

function query(sql, param,callback) {
	
    connection.query(sql,param,function (err, rows) {
        callback(err, rows);
    });
    //关闭connection
	// connection.end();
}
// function insert(sql, param,callback) {
//     connection.query(sql,  param,function (err, rows) {
//         callback(err, rows);
//     });
// }
// query('insert into billData set ?',{id:143111141421,bill:"afasdfas"}, function(err2,rows2){
// 	console.log(rows2 instanceof Array);
// })


// query('SELECT * FROM `billData` WHERE `id` = ?',['7777774'],function(error, results, fields) {
// 	if(error){
// 		console.log(error);
// 	}
// 	console.log(results);
// })







module.exports = router;
