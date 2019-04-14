import { Credentials, PartyEvent, Location, Tag, Party } from "../types";
import axios, { AxiosResponse } from "axios";
import store from "../store";
import actions from "../actions";

type Headers = { [key: string]: any };
const API_URL = process.env.REACT_APP_API_URL || "/api";

const get = (path: string, headers: Headers = {}) => {
  const auth = store.getState().session.credentials;
  if (auth) {
    headers.Authorization = `Basic ${auth.username}:${auth.password}`;
  }
  return axios({ method: "get", url: API_URL + path, headers });
};

const post = (path: string, data: any) => {
  const headers: Headers = {};
  const auth = store.getState().session.credentials;
  if (auth) {
    headers.Authorization = `Basic ${auth.username}:${auth.password}`;
  }
  return axios({ method: "post", url: API_URL + path, headers, data });
};

export async function getEvents(party: Party) {
  try {
    setTimeout(() => {
      store.dispatch(
        actions.setEvents([
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
            id: 1,
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
            id: 2,
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
        ])
      );
    }, 1000);
    // const response: AxiosResponse<Array<Events>> = await get(`/admin/event/party/${party}`);
    // store.dispatch(actions.setEvents(response.data));
    return true;
  } catch (error) {
    return false;
  }
}

export async function getParties() {
  try {
    store.dispatch(actions.setParties(["winter19", "summer19"]));
    // const response: AxiosResponse<Array<Party>> = await get("/admin/party");
    // store.dispatch(actions.setParties(response.data));
    return true;
  } catch (error) {
    return false;
  }
}

export function getLocations() {
  // TODO: get ${API_URL}/admin/location
}

export function getTags() {
  // TODO: get ${API_URL}/admin/tag
}

export function deleteEvent(id: number) {
  // TODO: get ${API_URL}/admin/event/id/${id}
}

export function deleteTag(id: number) {
  // TODO: get ${API_URL}/admin/tag/id/${id}
}

export function deleteLocation(id: number) {
  // TODO: get ${API_URL}/admin/location/id/${id}
}

export function postEvent(event: PartyEvent) {
  // TODO: get ${API_URL}/admin/event
}

export function postTag(event: Tag) {
  // TODO: get ${API_URL}/admin/tag
}

export function postLocation(event: Location) {
  // TODO: get ${API_URL}/admin/location
}

export async function login(credentials: Credentials) {
  try {
    // await get("/admin/party", { Authorization: `Basic ${credentials.username}:${credentials.password}` });
    store.dispatch(
      actions.setSession({
        isAuthenticated: true,
        credentials
      })
    );
    return true;
  } catch (error) {
    return false;
  }
}

export function logout() {
  store.dispatch(
    actions.setSession({
      isAuthenticated: false
    })
  );
}
