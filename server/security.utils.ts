const util = require('util');
const crypto = require('crypto');

// convert a callback based code to promise based
export const randomBytes = util.promisify(
  crypto.randomBytes
);



