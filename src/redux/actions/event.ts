import {
  PartyEvent,
  AddEvent,
  ActionType,
  SetEvents,
  PartyEvents,
  EventLocation,
  SetLocations,
  Tag,
  SetTags,
  RemoveEvent,
  AddTag
} from "../../types";

function addEvent(payload: PartyEvent): AddEvent {
  return {
    payload,
    type: ActionType.ADD_EVENT
  };
}

function editEvent(payload: PartyEvent): AddEvent {
  return {
    payload,
    type: ActionType.ADD_EVENT
  };
}

function removeEvent(payload: PartyEvent): RemoveEvent {
  return {
    payload,
    type: ActionType.REMOVE_EVENT
  };
}

function setEvents(payload: PartyEvents): SetEvents {
  return {
    payload,
    type: ActionType.SET_EVENTS
  };
}

function setLocations(payload: Array<EventLocation>): SetLocations {
  return {
    payload,
    type: ActionType.SET_LOCATIONS
  };
}

function setTags(payload: Array<Tag>): SetTags {
  return {
    payload,
    type: ActionType.SET_TAGS
  };
}

function addTag(payload: Tag): AddTag {
  return {
    payload,
    type: ActionType.ADD_TAG
  };
}

const eventActions = {
  addEvent,
  editEvent,
  removeEvent,
  setEvents,
  setLocations,
  setTags,
  addTag
};

export default eventActions;
