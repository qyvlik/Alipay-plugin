var express = require('express');
var router = express.Router();

// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : '192.168.5.5',
//   user     : 'touclick',
//   password : 'touclick!@#',
//   database : 'AliPay',
//   port: '3306'
// });
 

// // function test(){
// // 	connection.connect();
// // 	connection.query('INSERT INTO billData SET ?', {id: 11222, bill: 'Hello MySQL'},function (error, results, fields) {
// // 	  	if (error) throw error;
// // 	  	console.log('The solution is: ', results[0].solution);
// // 	  	connection.end();
// // 	});
	
// // }		  
// // test();
// //创建一个connection
// connection.connect(); 

// function query(sql, param,callback) {
//     // connection.getConnection(function (err, connection) {
//         // Use the connection
//         connection.query(sql,param, function (err, rows) {
//             callback(err, rows);
//             // connection.release();//释放链接
//         });
//     // });
// }
// query('INSERT INTO billData SET ?',{id: 7777774, bill: 'Hello MySQL'}, function(err,rows){
// 	console.log(rows);
// });
// // 
// // connection.query('SELECT * form AliPay', function(err, rows, fields) {
// // 	if(err){

// // 	}else{
// // 		console.log(rows);
// // 	}
// // })

// //关闭connection
// connection.end();



module.exports = router;
