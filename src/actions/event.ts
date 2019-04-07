import { IEvent, IAddEvent, ActionType } from "../types";

function addEvent(payload: IEvent): IAddEvent {
  return {
    payload,
    type: ActionType.ADD_EVENT
  };
}

const eventActions = {
  addEvent
};

export default eventActions;
