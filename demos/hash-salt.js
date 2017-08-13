var crypto = require('crypto');


var password = "monkey";

// randomBytes: generate a salt pre user, salt should be stored with hashed passwordDigest in the database
crypto.randomBytes(256, function(err, salt) {

  // pbkdf2: combine the salt the hash passwordDigest algorithm, to generate a safe passwordDigest
  crypto.pbkdf2(password, salt, 100000, 512, 'sha256',
    function(err, hash) {

      console.log("The result of hashing " + password + " is:\n\n" +
        hash.toString('hex') + "\n\n");

    });


});
