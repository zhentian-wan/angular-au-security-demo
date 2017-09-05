"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var session_store_1 = require("./session-store");
function getUser(req, res) {
    // Get sessionid from cookies
    var sessionId = req.cookies['SESSIONID'];
    // get user according to the session id from the session storage
    var user = session_store_1.sessionStore.findUserBySessionId(sessionId);
    if (user) {
        // if there is user, send successful response
        res.status(200).json(user);
    }
    else {
        // if there is no user, send empty response
        res.sendStatus(204);
    }
}
exports.getUser = getUser;
//# sourceMappingURL=/Users/zhentianwan/Documents/Programming/Angular2/angular-security-course/ts-node-68ee3ed04ed2470b254e92d708a85007aa11ce18f7f92036bd1ad817d7932003/c9387a2cdb4e320a1224b55969fc80a485fe4d8795f979579de2d9007faa6b88/5a68c7618cb8e92f29a24980ab7cad97776bd39323b93988f84061ce3c9ccd0c.js.map