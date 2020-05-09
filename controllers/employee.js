
let db = require('../core/db');

//get 
exports.getList = (req, res) => {

    db.executeSql("Select * from emp ", (data, err) => {
        if (err) {
            res.writeHeader(500, "Internal Error Occured ",{"Content-Type":"text/html"});
            res.write("<html><head><tittle>500</tittle></head><body> <h3> 500 : Internal Error. Details: "+err+"</h3></body></html>");
        } else {
            res.writeHeader(200, {"Content-Type":"application/json"});
            res.write(JSON.stringify(data));  
        }
        res.end();
    });

};

//get
exports.get = (res, req, empno) => {

};

//post 
exports.add = (req, res, reqBody) => {


};

//pup 
exports.update = (req, res, reqBody) => {


};

//post 
exports.delete = (req, res, reqBody) => {


};
