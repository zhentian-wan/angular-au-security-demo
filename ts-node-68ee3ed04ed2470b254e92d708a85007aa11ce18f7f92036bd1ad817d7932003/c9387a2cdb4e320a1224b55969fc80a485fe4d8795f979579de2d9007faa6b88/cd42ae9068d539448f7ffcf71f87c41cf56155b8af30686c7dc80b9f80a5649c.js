"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var fs = require("fs");
var https = require("https");
var read_all_lessons_route_1 = require("./read-all-lessons.route");
var create_user_route_1 = require("./create-user.route");
var get_user_route_1 = require("./get-user.route");
var valid_session_middle_1 = require("./valid-session.middle");
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var router = express.Router();
var app = express();
app.use(cookieParser());
var commandLineArgs = require('command-line-args');
var optionDefinitions = [
    { name: 'secure', type: Boolean, defaultOption: true },
];
var options = commandLineArgs(optionDefinitions);
app.use(bodyParser.json());
// middlewares
router.use('/api/lessons', valid_session_middle_1.isSessionValid);
// REST API
app.route('/api/lessons')
    .get(read_all_lessons_route_1.readAllLessons);
app.route('/api/signup')
    .post(create_user_route_1.createUser);
app.route('/api/user')
    .get(get_user_route_1.getUser);
if (options.secure) {
    var httpsServer_1 = https.createServer({
        key: fs.readFileSync('key.pem'),
        cert: fs.readFileSync('cert.pem')
    }, app);
    // launch an HTTPS Server. Note: this does NOT mean that the application is secure
    httpsServer_1.listen(9000, function () { return console.log('HTTPS Secure Server running at https://localhost:' + httpsServer_1.address().port); });
}
else {
    // launch an HTTP Server
    var httpServer_1 = app.listen(9000, function () {
        console.log('HTTP Server running at https://localhost:' + httpServer_1.address().port);
    });
}
//# sourceMappingURL=/Users/zhentianwan/Documents/Programming/Angular2/angular-security-course/ts-node-68ee3ed04ed2470b254e92d708a85007aa11ce18f7f92036bd1ad817d7932003/c9387a2cdb4e320a1224b55969fc80a485fe4d8795f979579de2d9007faa6b88/cd42ae9068d539448f7ffcf71f87c41cf56155b8af30686c7dc80b9f80a5649c.js.map