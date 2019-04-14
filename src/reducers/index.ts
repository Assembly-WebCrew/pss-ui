import { StoreState, Action, ActionType } from "../types";

const initialState: StoreState = {
  session: {
    isAuthenticated: false
  },
  events: undefined,
  parties: []
};

function reducers(state: StoreState, action: Action) {
  switch (action.type) {
    case ActionType.SET_SESSION:
      return { ...state, session: { ...action.payload } };
    case ActionType.SET_PARTIES:
      return { ...state, parties: action.payload };
    case ActionType.SET_EVENTS:
      return {
        ...state,
        events: action.payload ? [...action.payload] : undefined
      };
    default:
      return state;
  }
}

export default (state: StoreState = initialState, action: Action) => {
  return reducers(state, action);
};
