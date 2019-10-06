import { ActionType, PartyEvents, PartyEvent, Action } from '../../types';

const sortFn = (a: PartyEvent, b: PartyEvent) => a.startTime - b.startTime;

export default (state: PartyEvents = {}, action: Action): PartyEvents => {
  switch (action.type) {
    case ActionType.SET_EVENTS:
      return action.payload;
    case ActionType.ADD_EVENT:
      return {
        ...state,
        [action.payload.party]: (state[action.payload.party] || []).concat([action.payload]).sort(sortFn)
      };
    case ActionType.EDIT_EVENT:
      return {
        ...state,
        [action.payload.party]: (state[action.payload.party] || [])
          .filter(event => event.id !== action.payload.id)
          .concat([action.payload])
          .sort(sortFn)
      };
    case ActionType.REMOVE_EVENT:
      return {
        ...state,
        [action.payload.party]: (state[action.payload.party] || []).filter(event => event.id !== action.payload.id)
      };
    default:
      return state;
  }
};
