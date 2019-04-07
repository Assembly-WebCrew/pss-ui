import { Party, ActionType, SetParties } from "../types";

function addParty(payload: Party) {
  return {
    payload,
    type: ActionType.ADD_PARTY
  };
}

function setParties(payload: Array<Party>): SetParties {
  return {
    payload,
    type: ActionType.SET_PARTIES
  };
}

const partyActions = {
  addParty,
  setParties
};

export default partyActions;
