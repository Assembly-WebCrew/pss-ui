import { Party, ActionType } from "../types";

function addParty(payload: Party) {
  return {
    payload,
    type: ActionType.ADD_PARTY
  };
}

function getEvents(payload: Party) {
  return {
    payload,
    type: ActionType.GET_EVENTS
  };
}

const partyActions = {
  addParty,
  getEvents
};

export default partyActions;
