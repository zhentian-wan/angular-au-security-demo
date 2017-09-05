"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var database_data_1 = require("./database-data");
var InMemoryDatabase = (function () {
    function InMemoryDatabase() {
        this.userCounter = 0;
    }
    InMemoryDatabase.prototype.readAllLessons = function () {
        return _.values(database_data_1.LESSONS);
    };
    InMemoryDatabase.prototype.createUser = function (email, passwordDigest) {
        var id = ++this.userCounter;
        var user = {
            id: id,
            email: email,
            passwordDigest: passwordDigest
        };
        database_data_1.USERS[id] = user;
        return user;
    };
    return InMemoryDatabase;
}());
exports.db = new InMemoryDatabase();
//# sourceMappingURL=/Users/zhentianwan/Documents/Programming/Angular2/angular-security-course/ts-node-68ee3ed04ed2470b254e92d708a85007aa11ce18f7f92036bd1ad817d7932003/c9387a2cdb4e320a1224b55969fc80a485fe4d8795f979579de2d9007faa6b88/d85d26b206a7337c5a3b8d500fb0774d05a17453ce37b4a078f16105d298a4d0.js.map