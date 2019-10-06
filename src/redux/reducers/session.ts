import { ActionType, Session, Action } from '../../types';

const initialSession = () => {
  if (process.env.NODE_ENV === 'production') {
    return { isAuthenticated: false };
  } else {
    // During local development you can "skip" the login with (change the token): localStorage.setItem("Authorization", "Basic YTph");
    const auth: string | undefined = localStorage.getItem('Authorization') || undefined;
    return { isAuthenticated: typeof auth === 'string', authorization: auth };
  }
};

export default (state: Session = initialSession(), action: Action): Session => {
  switch (action.type) {
    case ActionType.SET_SESSION:
      return action.payload;
    default:
      return state;
  }
};
