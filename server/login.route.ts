import {Request, Response} from 'express';
import {db} from './database';
import {DbUser} from './db-user';
import * as argon2 from 'argon2';
import {randomBytes} from './security.utils';
import {sessionStore} from './session-store';


export function login(req: Request, res: Response) {

  const info = req.body;
  const user = db.findUserByEmail(info.email);

  if (!user) {
    res.sendStatus(403);
  } else {
    loginAndBuildResponse(info, user, res);
  }
}

async function loginAndBuildResponse(credentials: any, user: DbUser, res: Response) {
  try {
    const sessionId = await attemptLogin(credentials, user);
    res.cookie('SESSIONID', sessionId, {httpOnly: true, secure: true});
    res.status(200).json({id: user.id, email: user.email});
  } catch (err) {
    res.sendStatus(403);
  }
}


async function attemptLogin(info: any, user: DbUser) {
  const isPasswordValid = await argon2.verify(user.passwordDigest, info.password);

  if (!isPasswordValid) {
    throw new Error('Password Invalid');
  }

  const sessionId = await randomBytes(32).then(bytes => bytes.toString('hex'));
  sessionStore.createSession(sessionId, user);

  return sessionId;
}
