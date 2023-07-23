//simple express server to run frontend production build;
const express = require("express");
const path = require("path");
const app = express();
// const https = require('https');
// const fs = require('fs');
// const privateKey = fs.readFileSync('./certification/key.pem', 'utf8');
// const certificate = fs.readFileSync('./certification/cert.pem', 'utf8');
// const credentials = { key: privateKey, cert: certificate };

app.use(express.static(path.join(__dirname, "build")));
// const httpsServer = https.createServer(credentials, app);
app.get("/*", function (req, res) {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(3333);