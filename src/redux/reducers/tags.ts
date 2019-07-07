import { ActionType, Tag, Action } from "../../types";

export default (state: Tag[] = [], action: Action): Tag[] => {
  switch (action.type) {
    case ActionType.SET_TAGS:
      return action.payload;
    default:
      return state;
  }
};
