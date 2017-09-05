
import {sessionStore} from './session-store';
import {Response, Request} from 'express';

export const isSessionValid = (req: Request, res: Response, next) => {
  console.log("come", req.cookies['SESSIONID']);
  const sessionId = req.cookies['SESSIONID'];
  const isValid = sessionStore.isSessionValid(sessionId);
  if (!isValid) {
    res.sendStatus(403);
  } else {
    next();
  }
};
