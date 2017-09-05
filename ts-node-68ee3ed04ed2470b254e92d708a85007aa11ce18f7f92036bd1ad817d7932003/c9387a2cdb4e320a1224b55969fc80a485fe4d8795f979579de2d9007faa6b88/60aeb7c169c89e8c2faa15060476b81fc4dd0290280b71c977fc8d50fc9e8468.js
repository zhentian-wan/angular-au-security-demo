"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("./database");
function readAllLessons(req, res) {
    return res.status(200).json(database_1.db.readAllLessons());
}
exports.readAllLessons = readAllLessons;
//# sourceMappingURL=/Users/zhentianwan/Documents/Programming/Angular2/angular-security-course/ts-node-68ee3ed04ed2470b254e92d708a85007aa11ce18f7f92036bd1ad817d7932003/c9387a2cdb4e320a1224b55969fc80a485fe4d8795f979579de2d9007faa6b88/60aeb7c169c89e8c2faa15060476b81fc4dd0290280b71c977fc8d50fc9e8468.js.map