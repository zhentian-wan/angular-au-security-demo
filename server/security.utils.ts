const util = require('util');
const crypto = require('crypto');
import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
import * as path from 'path';

// generate key on http://travistidwell.com/jsencrypt/demo/
const RSA_PRIVATE_KEY = fs.readFileSync(`${path.join(__dirname, '../demos/')}/private.key`);
const RSA_PUBLIC_KEY = fs.readFileSync(`${path.join(__dirname, '../demos/')}/public.key`);
const SESSION_DURATION = 240;

// convert a callback based code to promise based
export const randomBytes = util.promisify(
  crypto.randomBytes
);

const signJwt = util.promisify(jwt.sign);

export const createSessionToken = async (userId: string) => {
  return signJwt({}, RSA_PRIVATE_KEY, {
    algorithm: 'RS256',
    expiresIn: SESSION_DURATION,
    subject: userId
  });
};
