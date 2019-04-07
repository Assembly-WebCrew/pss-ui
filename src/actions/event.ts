import { Event, AddEvent, ActionType } from "../types";

function addEvent(payload: Event): AddEvent {
  return {
    payload,
    type: ActionType.ADD_EVENT
  };
}

function setEvents(payload: Array<Event>) {
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
