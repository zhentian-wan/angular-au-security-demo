"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var session_store_1 = require("./session-store");
exports.isSessionValid = function (req, res, next) {
    console.log("come", req.cookies['SESSIONID']);
    var sessionId = req.cookies['SESSIONID'];
    var isValid = session_store_1.sessionStore.isSessionValid(sessionId);
    if (!isValid) {
        res.sendStatus(403);
    }
    else {
        next();
    }
};
//# sourceMappingURL=/Users/zhentianwan/Documents/Programming/Angular2/angular-security-course/ts-node-68ee3ed04ed2470b254e92d708a85007aa11ce18f7f92036bd1ad817d7932003/c9387a2cdb4e320a1224b55969fc80a485fe4d8795f979579de2d9007faa6b88/6649c16c3b8687b31afc1f88d74524b30b781e8a670ed09d7009f1ac1b593eb1.js.map