"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var session_1 = require("./session");
var SessionStore = (function () {
    function SessionStore() {
        this.sessions = {};
    }
    SessionStore.prototype.createSession = function (sessionId, user) {
        this.sessions[sessionId] = new session_1.Session(sessionId, user);
    };
    SessionStore.prototype.findUserBySessionId = function (sessionId) {
        var session = this.sessions[sessionId];
        return this.isSessionValid(sessionId) ? session.user : undefined;
    };
    SessionStore.prototype.isSessionValid = function (sessionId) {
        var session = this.sessions[sessionId];
        return session && session.isValid();
    };
    return SessionStore;
}());
// We want only global singleton
exports.sessionStore = new SessionStore();
//# sourceMappingURL=/Users/zhentianwan/Documents/Programming/Angular2/angular-security-course/ts-node-68ee3ed04ed2470b254e92d708a85007aa11ce18f7f92036bd1ad817d7932003/c9387a2cdb4e320a1224b55969fc80a485fe4d8795f979579de2d9007faa6b88/610c084d72016282c7d2b244d65c71a2b60f0ca43e0dcd19e99a9ae1d6c45c75.js.map