var express = require('express');
var router = express.Router();
var mysql = require("mysql");

// First you need to create a connection to the db
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database : "test",
    port: "3306"
});

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});
router.get('/test', function (req, res) {
    //res.send('respond with a resource with new url');
    con.connect();
    con.query('SELECT * from  person', function (err, rows, fields) {
        if (err) console.log('The error is : ', err);
        res.send(rows);
    });
    
    con.end();
});

module.exports = router;