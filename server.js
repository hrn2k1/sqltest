var sql = require('node-sqlserver');
var conn_str = "Driver={SQL Server Native Client 11.0};Server=tcp:niqqqj7roh.database.windows.net,1433;Database=TodoList6_db;Uid=TodoList6@niqqqj7roh;Pwd=Admin123;Encrypt=yes;Connection Timeout=30";

var http = require('http')
var port = process.env.port;
http.createServer(function (req, res) {
    sql.query(conn_str, "SELECT id,text,complete FROM TodoItem", function (err, results) {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.write("Got error :-( " + err);
            res.end("");
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        /*for (var i = 0; i < results.length; i++) {
            res.write("ID: " + results[i].ID + " Column1: " + results[i].Column1 + " Column2: " + results[i].Column2);
        }*/
		console.log(results);
        res.end("; Done.");
    });
}).listen(port);