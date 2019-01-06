import { Action } from '../actions';
import { IStoreState } from '../types/index';

const initialState: IStoreState = { // TODO: remove dummy data
  events: [
    {
      "description": "string",
      "endTime": 0,
      "id": 0,
      "location": {
        "description": "string",
        "id": 0,
        "name": "string",
        "url": "string"
      },
      "mediaUrl": "string",
      "name": "string",
      "originalStartTime": 0,
      "party": "string",
      "startTime": 0,
      "tags": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "url": "string"
    },
    {
      "description": "string",
      "endTime": 0,
      "id": 0,
      "location": {
        "description": "string",
        "id": 0,
        "name": "string",
        "url": "string"
      },
      "mediaUrl": "string",
      "name": "string",
      "originalStartTime": 0,
      "party": "string",
      "startTime": 0,
      "tags": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "url": "string"
    },
    {
      "description": "string",
      "endTime": 0,
      "id": 0,
      "location": {
        "description": "string",
        "id": 0,
        "name": "string",
        "url": "string"
      },
      "mediaUrl": "string",
      "name": "string",
      "originalStartTime": 0,
      "party": "string",
      "startTime": 0,
      "tags": [
        {
          "id": 0,
          "name": "string"
        },{
          "id": 1,
          "name": "string 2"
        }
      ],
      "url": "string"
    }
  ],
  parties: ['winter19', 'summer19']
}

export function actions(state: IStoreState = initialState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}