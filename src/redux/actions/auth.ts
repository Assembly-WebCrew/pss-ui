import { ActionType, SetSession, Session } from "../../types";

function setSession(payload: Session): SetSession {
  return {
    payload,
    type: ActionType.SET_SESSION
  };
}

const authActions = {
  setSession
};

export default authActions;
