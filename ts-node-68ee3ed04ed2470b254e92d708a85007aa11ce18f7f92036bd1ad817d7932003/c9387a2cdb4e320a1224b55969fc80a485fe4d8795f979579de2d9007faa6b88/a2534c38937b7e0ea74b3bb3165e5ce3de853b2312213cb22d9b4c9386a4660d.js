"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var Session = (function () {
    function Session(sessionId, user) {
        this.sessionId = sessionId;
        this.user = user;
        this.validUntil = moment().add(Session.VALIDITY_MINUTES, 'minutes');
    }
    Session.prototype.isValid = function () {
        return moment().diff(this.validUntil, 'minutes') <= 0;
    };
    return Session;
}());
Session.VALIDITY_MINUTES = 2;
exports.Session = Session;
//# sourceMappingURL=/Users/zhentianwan/Documents/Programming/Angular2/angular-security-course/ts-node-68ee3ed04ed2470b254e92d708a85007aa11ce18f7f92036bd1ad817d7932003/c9387a2cdb4e320a1224b55969fc80a485fe4d8795f979579de2d9007faa6b88/a2534c38937b7e0ea74b3bb3165e5ce3de853b2312213cb22d9b4c9386a4660d.js.map