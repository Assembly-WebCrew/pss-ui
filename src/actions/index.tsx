import { IEvent, Party, ICredentials } from "../types";

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

function addEvent(payload: IEvent): IAddEvent {
  return {
    payload,
    type: ActionType.ADD_EVENT
  };
}

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

function login(payload: ICredentials): ILoginEvent {
  return {
    payload,
    type: ActionType.LOGIN
  };
}

export const authActions = {
  login
};

export const eventActions = {
  addEvent
};

export const partyActions = {
  addParty,
  getEvents
};

export const actions = {
  ...eventActions,
  ...partyActions,
  ...authActions
};
