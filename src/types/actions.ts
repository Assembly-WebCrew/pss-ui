import { Event, Session, Party } from ".";

export enum ActionType {
  ADD_EVENT,
  ADD_PARTY,
  EDIT_EVENT,
  REMOVE_EVENT,
  SET_ACTIVE_PARTY,
  SET_EVENTS,
  SET_PARTIES,
  SET_SESSION
}

export interface AddEvent {
  payload: Event;
  type: ActionType.ADD_EVENT;
}

export interface SetActiveParty {
  payload: Party | undefined;
  type: ActionType.SET_ACTIVE_PARTY;
}

export interface SetEvents {
  payload: Array<Event>;
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
  | SetActiveParty
  | SetEvents
  | SetParties
  | SetSession;
