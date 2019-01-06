import { IEvent, Party } from '../types';

export enum Type {
  ADD_EVENT = 'ADD_EVENT',
  ADD_PARTY = 'ADD_PARTY',
  EDIT_EVENT = 'EDIT_EVENT',
  GET_EVENTS = 'GET_EVENTS',
  REMOVE_EVENT = 'REMOVE_EVENT'
}

export interface IAddEvent {
  payload: IEvent;
  type: Type.ADD_EVENT;
}

export type Action = IAddEvent;

function addEvent(payload: IEvent): IAddEvent {
  return {
    payload,
    type: Type.ADD_EVENT
  }
}

function addParty(payload: Party) {
  return {
    payload,
    type: Type.ADD_PARTY
  }
}

function getEvents(payload: Party) {
  return {
    payload,
    type: Type.GET_EVENTS
  }
}

export const eventActions = {
  addEvent
};

export const partyActions = {
  addParty,
  getEvents
};

export const actions = {
  ...eventActions,
  ...partyActions
};