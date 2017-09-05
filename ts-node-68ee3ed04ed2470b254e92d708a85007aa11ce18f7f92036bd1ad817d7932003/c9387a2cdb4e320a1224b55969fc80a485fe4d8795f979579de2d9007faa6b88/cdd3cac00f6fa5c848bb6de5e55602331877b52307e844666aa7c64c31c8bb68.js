"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("./database");
var argon2 = require("argon2");
var password_validation_1 = require("./password-validation");
var security_utils_1 = require("./security.utils");
var session_store_1 = require("./session-store");
function createUser(req, res) {
    var credentials = req.body;
    var errors = password_validation_1.validatePassword(credentials.password);
    if (errors.length > 0) {
        res.status(400).json({
            errors: errors
        });
    }
    else {
        createUserAndSession(res, credentials);
    }
}
exports.createUser = createUser;
function createUserAndSession(res, credentials) {
    return __awaiter(this, void 0, void 0, function () {
        var passwordDigest, user, sessionId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, argon2.hash(credentials.password)];
                case 1:
                    passwordDigest = _a.sent();
                    user = database_1.db.createUser(credentials.email, passwordDigest);
                    return [4 /*yield*/, security_utils_1.randomBytes(32).then(function (bytes) { return bytes.toString('hex'); })];
                case 2:
                    sessionId = _a.sent();
                    // link sessionId with user
                    session_store_1.sessionStore.createSession(sessionId, user);
                    // set sessionid into cookie
                    res.cookie('SESSIONID', sessionId, {
                        httpOnly: true,
                        secure: true // enable https only
                    });
                    // send back to UI
                    res.status(200).json({ id: user.id, email: user.email });
                    return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=/Users/zhentianwan/Documents/Programming/Angular2/angular-security-course/ts-node-68ee3ed04ed2470b254e92d708a85007aa11ce18f7f92036bd1ad817d7932003/c9387a2cdb4e320a1224b55969fc80a485fe4d8795f979579de2d9007faa6b88/cdd3cac00f6fa5c848bb6de5e55602331877b52307e844666aa7c64c31c8bb68.js.map