
const mysql = require('mysql');
const settings = require('../settings');

exports.executeSql = (sql, callback ) =>{

    var connection = mysql.createConnection(settings.dbConfig);
    connection.connect((err)=>{
        if(err){
         console.error(err.message);
         callback(null , err);
        }  else{
            connection.query(sql,(err ,result)=>{
                if(err) {
                    console.error(err.message);
                           callback(null ,err);
                }else if(result){
                    callback(result);
                }
            });  
        }
    });
}