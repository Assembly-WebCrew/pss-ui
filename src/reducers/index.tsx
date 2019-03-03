import { Action, ActionType } from "../actions";
import { IStoreState } from "../types/index";

const initialState: IStoreState = {
  // TODO: remove dummy data
  session: {
    isAuthenticated: false
  },
  events: [
    {
      description: "string",
      endTime: 0,
      id: 0,
      location: {
        description: "string",
        id: 0,
        name: "string",
        url: "string"
      },
      mediaUrl: "string",
      name: "string",
      originalStartTime: 0,
      party: "string",
      startTime: 0,
      tags: [
        {
          id: 0,
          name: "string"
        }
      ],
      url: "string"
    },
    {
      description: "string",
      endTime: 0,
      id: 0,
      location: {
        description: "string",
        id: 0,
        name: "string",
        url: "string"
      },
      mediaUrl: "string",
      name: "string",
      originalStartTime: 0,
      party: "string",
      startTime: 0,
      tags: [
        {
          id: 0,
          name: "string"
        }
      ],
      url: "string"
    },
    {
      description: "string",
      endTime: 0,
      id: 0,
      location: {
        description: "string",
        id: 0,
        name: "string",
        url: "string"
      },
      mediaUrl: "string",
      name: "string",
      originalStartTime: 0,
      party: "string",
      startTime: 0,
      tags: [
        {
          id: 0,
          name: "string"
        },
        {
          id: 1,
          name: "string 2"
        }
      ],
      url: "string"
    }
  ],
  parties: ["winter19", "summer19"]
};

export function actions(state: IStoreState, action: Action) {
  switch (action.type) {
    case ActionType.LOGIN:
      return { ...state, session: { isAuthenticated: true } };
    default:
      return state;
  }
}

export default (state: IStoreState = initialState, action: Action) => {
  return actions(state, action);
};
