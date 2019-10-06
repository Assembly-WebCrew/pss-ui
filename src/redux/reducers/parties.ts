import { ActionType, Party, Action } from '../../types';

export default (state: Party[] = [], action: Action): Party[] => {
  switch (action.type) {
    case ActionType.SET_PARTIES:
      return action.payload;
    default:
      return state;
  }
};
