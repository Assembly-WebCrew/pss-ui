import { ActionType, EventLocation, Action } from "../../types";

export default (state: EventLocation[] = [], action: Action): EventLocation[] => {
  switch (action.type) {
    case ActionType.SET_LOCATIONS:
      return action.payload;
    default:
      return state;
  }
};
