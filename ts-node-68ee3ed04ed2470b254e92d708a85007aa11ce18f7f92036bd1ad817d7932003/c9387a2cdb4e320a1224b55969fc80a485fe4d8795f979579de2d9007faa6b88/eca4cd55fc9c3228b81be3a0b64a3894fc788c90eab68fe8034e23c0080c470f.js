"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var passwordValidator = require("password-validator");
// Create a schema
var schema = new passwordValidator();
// Add properties to it
schema
    .is().min(7) // Minimum length 7
    .has().uppercase() // Must have uppercase letters
    .has().lowercase() // Must have lowercase letters
    .has().digits() // Must have digits
    .has().not().spaces() // Should not have spaces
    .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values
function validatePassword(password) {
    return schema.validate(password, { list: true });
}
exports.validatePassword = validatePassword;
//# sourceMappingURL=/Users/zhentianwan/Documents/Programming/Angular2/angular-security-course/ts-node-68ee3ed04ed2470b254e92d708a85007aa11ce18f7f92036bd1ad817d7932003/c9387a2cdb4e320a1224b55969fc80a485fe4d8795f979579de2d9007faa6b88/eca4cd55fc9c3228b81be3a0b64a3894fc788c90eab68fe8034e23c0080c470f.js.map