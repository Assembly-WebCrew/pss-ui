import { StoreState, Action, ActionType } from "../../types";

const initialSession = () => {
  if (process.env.NODE_ENV === "production") {
    return { isAuthenticated: false };
  } else {
    return {
      isAuthenticated: typeof localStorage.getItem('Authorization') === 'string',
      authorization: localStorage.getItem('Authorization') || undefined
    };
  }
}

const initialState: StoreState = {
  session: initialSession(),
  events: {},
  parties: [],
  locations: [],
  tags: []
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
        events: { ...state.events, ...action.payload }
      };
    case ActionType.ADD_EVENT:
      return {
        ...state,
        events: {
          ...state.events,
          [action.payload.party]: [
            ...(state.events[action.payload.party] || []),
            action.payload
          ].sort((a, b) => a.startTime - b.startTime)
        }
      };
    case ActionType.EDIT_EVENT:
      const events = state.events[action.payload.party]!.filter(
        event => event.id !== action.payload.id
      );
      return {
        ...state,
        events: {
          ...state.events,
          [action.payload.party]: [...events, action.payload].sort(
            (a, b) => a.startTime - b.startTime
          )
        }
      };
    case ActionType.REMOVE_EVENT:
      return {
        ...state,
        events: {
          ...state.events,
          [action.payload.party]: (
            state.events[action.payload.party] || []
          ).filter(event => event.id !== action.payload.id)
        }
      };
    case ActionType.SET_LOCATIONS:
      return { ...state, locations: action.payload };
    case ActionType.SET_TAGS:
      return { ...state, tags: action.payload };
    default:
      return state;
  }
}

export default (state: StoreState = initialState, action: Action) => {
  return reducers(state, action);
};
