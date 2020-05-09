
let http = require('http');
let emp = require('../controllers/employee');
let settings = require('../settings');

http.createServer((req, res) => {

    switch (req.method) {

        case "GET":
            if(req.url === "/")
            res.end();
            else if (req.url === "/employees")
            emp.getList(req,res);
            break;

        case "POST":
            break;

        case "PUT":
            break;

        case "DELETE":
            break;

        default :
             break;
    } 

}).listen(settings.webport, () => { console.log("listening on " + settings.webport + "...") });