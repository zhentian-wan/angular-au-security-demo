import {Request, Response} from 'express';
import {db} from './database';
import {USERS} from './database-data';

import * as argon2 from 'argon2';
import {validatePassword} from './password-validation';
import {randomBytes} from './security.utils';

export function createUser (req: Request, res: Response) {

  const credentials = req.body;

  const errors = validatePassword(credentials.password);

  if (errors.length > 0) {
    res.status(400).json({
      errors
    });
  } else {
    createUserAndSession(res, credentials);
  }
}

async function createUserAndSession(res, credentials) {
  const passwordDigest = await argon2.hash(credentials.password);
  const user = db.createUser(credentials.email, passwordDigest);
  const sessionId = await randomBytes(32).then(bytes => bytes.toString('hex'));
  console.log(sessionId);
  res.status(200).json({id: user.id, email: user.email});
}
