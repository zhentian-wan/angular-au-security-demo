const util = require('util');
const crypto = require('crypto');

// convert a callback based code to promise based
const randomBytes = util.promisify(
  crypto.randomBytes
);

/* Example of callback based code
crypto.randomBytes(32, (err, num) => {
  console.log(num);
});
*/

// Since randomBytes function now is promise based
randomBytes(32)
  .then(num => console.log(num))
  .catch(err => console.error(err));


