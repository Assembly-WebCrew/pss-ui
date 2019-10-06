import { PartyEvent, Session, Party, PartyEvents, EventLocation, Tag } from '.';

export enum ActionType {
  ADD_EVENT,
  ADD_PARTY,
  ADD_TAG,
  ADD_LOCATION,
  EDIT_EVENT,
  REMOVE_EVENT,
  REMOVE_TAG,
  REMOVE_LOCATION,
  SET_EVENTS,
  SET_PARTIES,
  SET_LOCATIONS,
  SET_TAGS,
  SET_SESSION
}

export interface AddEvent {
  payload: PartyEvent;
  type: ActionType.ADD_EVENT;
}

export interface RemoveEvent {
  payload: PartyEvent;
  type: ActionType.REMOVE_EVENT;
}

export interface AddParty {
  payload: Party;
  type: ActionType.ADD_PARTY;
}

export interface EditEvent {
  payload: PartyEvent;
  type: ActionType.EDIT_EVENT;
}

export interface SetEvents {
  payload: PartyEvents;
  type: ActionType.SET_EVENTS;
}

export interface SetParties {
  payload: Array<Party>;
  type: ActionType.SET_PARTIES;
}

export interface SetLocations {
  payload: Array<EventLocation>;
  type: ActionType.SET_LOCATIONS;
}

export interface SetTags {
  payload: Array<Tag>;
  type: ActionType.SET_TAGS;
}

export interface AddTag {
  payload: Tag;
  type: ActionType.ADD_TAG;
}

export interface SetSession {
  payload: Session;
  type: ActionType.SET_SESSION;
}

export type Action = AddEvent | RemoveEvent | AddParty | EditEvent | SetEvents | SetParties | SetLocations | SetTags | AddTag | SetSession;
