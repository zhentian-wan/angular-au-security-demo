import {Request, Response} from 'express';
import {sessionStore} from './session-store';

export function getUser(req: Request, res: Response) {
  // Get sessionid from cookies
  const sessionId = req.cookies['SESSIONID'];
  // get user according to the session id from the session storage
  const user = sessionStore.findUserBySessionId(sessionId);
  if (user) {
    // if there is user, send successful response
    res.status(200).json(user);
  } else {
    // if there is no user, send empty response
    res.sendStatus(204);
  }
}
