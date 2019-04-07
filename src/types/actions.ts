import { IEvent, ICredentials } from ".";

export enum ActionType {
  ADD_EVENT = "ADD_EVENT",
  ADD_PARTY = "ADD_PARTY",
  EDIT_EVENT = "EDIT_EVENT",
  GET_EVENTS = "GET_EVENTS",
  REMOVE_EVENT = "REMOVE_EVENT",
  LOGIN = "LOGIN"
}

export interface IAddEvent {
  payload: IEvent;
  type: ActionType.ADD_EVENT;
}

export interface ILoginEvent {
  payload: ICredentials;
  type: ActionType.LOGIN;
}

export type Action = IAddEvent | ILoginEvent;
