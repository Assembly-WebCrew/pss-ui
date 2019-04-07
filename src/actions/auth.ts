import { ICredentials, ActionType, ILoginEvent } from "../types";

function login(payload: ICredentials): ILoginEvent {
  return {
    payload,
    type: ActionType.LOGIN
  };
}

const authActions = {
  login
};

export default authActions;
