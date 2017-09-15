import {Request, Response} from 'express';
import {db} from './database';
import {DbUser} from './db-user';


export function login(req: Request, res: Response) {

  const info = req.body;
  const user = db.findUserByEmail(info.email);

  if (!user) {
    res.sendStatus(403);
  } else {
    attemptLogin(info, user)
      .then(() => {

      })
      .catch(() => {
        res.sendStatus(403);
      });
  }
}


async function attemptLogin(info: any, user: DbUser) {

}
