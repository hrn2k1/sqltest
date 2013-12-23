var express = require('express');
var app = express.createServer();
//var sql = require('node-sqlserver');

var conn_str = "Driver={SQL Server Native Client 11.0};" +
               "Server=tcp:niqqqj7roh.database.windows.net,1433" +
               "Database=TodoList6_db;Uid=TodoList6@niqqqj7roh;" +
               "Pwd=Admin123;Encrypt=yes;Connection Timeout=30";
var query = "SELECT id,text,complete FROM TodoItem";
var port = process.env.port || 3331;

app.get('/', function (req, res) {
    var taskSet = [];
    /*sql.open(conn_str, function (err, conn) {
        if (err) {
            res.end("Error opening the connection!");
            return;
        }

        conn.queryRaw(query, function (err, results) {
            if (err) {
                res.end("Error running the task query");
                return;
            }
            console.log("row count = " + results.rows.length + "\n");
            for (var i = 0; i < results.rows.length; i++) {
                res.write("ID: " + results.rows[i][0] +
                          " text: " + results.rows[i][1] + 
                          " Complete: " + results.rows[i][2] + "\n");
            }
            res.end('Done --\n');
        });

    }); // sql.open*/
});
app.listen(port);


/*var sql = require('msnodesql');
var conn_str = "Driver={SQL Server Native Client 10.0};Server=tcp:niqqqj7roh.database.windows.net,1433;Database=TodoList6_db;Uid=TodoList6@niqqqj7roh;Pwd=Admin123;Encrypt=yes;Connection Timeout=30;";

var http = require('http')
var port = process.env.port||3000;
http.createServer(function (req, res) {
    sql.query(conn_str, "SELECT * FROM TodoItem", function (err, results) {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.write("Got error :-( " + err);
            res.end("");
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        console.log(results);
        res.write(results);
        /*for (var i = 0; i < results.length; i++) {
            res.write("ID: " + results[i].ID + " Column1: " + results[i].Column1 + " Column2: " + results[i].Column2);
        }
        res.end("; Done.");
    });
}).listen(port);*/