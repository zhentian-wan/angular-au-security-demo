import {Session} from './session';
import {User} from '../src/app/model/user';
class SessionStore {
  private sessions: {[key: string]: Session} = {};

  createSession(sessionId: string, user: User) {
    this.sessions[sessionId] = new Session(sessionId, user);
  }
}

// We want only global singleton
export const sessionStore = new SessionStore();
