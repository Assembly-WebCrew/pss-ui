import { PartyEvent, Session, Party, PartyEvents } from ".";

export enum ActionType {
  ADD_EVENT,
  ADD_PARTY,
  EDIT_EVENT,
  REMOVE_EVENT,
  SET_EVENTS,
  SET_PARTIES,
  SET_SESSION
}

export interface AddEvent {
  payload: PartyEvent;
  type: ActionType.ADD_EVENT;
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

export interface SetSession {
  payload: Session;
  type: ActionType.SET_SESSION;
}

export type Action =
  | AddEvent
  | AddParty
  | EditEvent
  | SetEvents
  | SetParties
  | SetSession;
