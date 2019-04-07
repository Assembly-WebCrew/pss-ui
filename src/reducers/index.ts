import { StoreState, Action, ActionType } from "../types";

const initialState: StoreState = {
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
      isPublic: true,
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
      isPublic: true,
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
      isPublic: true,
      url: "string"
    }
  ],
  parties: ["winter19", "summer19"]
};

function reducers(state: StoreState, action: Action) {
  switch (action.type) {
    case ActionType.SET_SESSION:
      return { ...state, session: { ...action.payload } };
    case ActionType.SET_PARTIES:
      return { ...state, parties: action.payload };
    case ActionType.SET_EVENTS:
      return { ...state, events: action.payload };
    case ActionType.SET_ACTIVE_PARTY:
      return { ...state, activeParty: action.payload };
    default:
      return state;
  }
}

export default (state: StoreState = initialState, action: Action) => {
  return reducers(state, action);
};
