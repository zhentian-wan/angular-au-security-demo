import {Response, Request} from 'express';
import {sessionStore} from './session-store';

export const logout = (req: Request, res: Response) => {
  console.log(req.cookies['SESSIONID']);
  const sessionId = req.cookies['SESSIONID'];
  sessionStore.destroySession(sessionId);
  res.clearCookie('SESSIONID');
  res.sendStatus(200);
};
