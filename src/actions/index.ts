import eventActions from "./event";
import partyActions from "./party";
import authActions from "./auth";

export const actions = {
  ...eventActions,
  ...partyActions,
  ...authActions
};

export default actions;
