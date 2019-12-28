const express = require('express');
const ip = require('ip');

const app = express();

app.get('/', function (req, res) {
                var address = ip.address();
		res.send('My ip address is: ' + address + "\n");
		});
app.listen(3000, function () {
		console.log("Simple app to retrieve IP address of docker container.")
		});

