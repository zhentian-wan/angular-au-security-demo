import {Request, Response} from 'express';
import {db} from './database';

import * as argon2 from 'argon2';
import {validatePassword} from './password-validation';
import {createSessionToken} from './security.utils';

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
  // Create a password digest
  const passwordDigest = await argon2.hash(credentials.password);
  // Save into db
  const user = db.createUser(credentials.email, passwordDigest);
  // Create user JWT token
  const sessionId = await createSessionToken(user.id.toString());
  // set sessionid into cookie
  res.cookie('SESSIONID', sessionId, {
    httpOnly: true, // js cannot access cookie
    secure: true // enable https only
  });
  // send back to UI
  res.status(200).json({id: user.id, email: user.email});
}
