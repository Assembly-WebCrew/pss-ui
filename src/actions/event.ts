import { PartyEvent, AddEvent, ActionType, SetEvents } from "../types";

function addEvent(payload: PartyEvent): AddEvent {
  return {
    payload,
    type: ActionType.ADD_EVENT
  };
}

function setEvents(payload: Array<PartyEvent> | undefined): SetEvents {
  return {
    payload,
    type: ActionType.SET_EVENTS
  };
}

const eventActions = {
  addEvent,
  setEvents
};

export default eventActions;
