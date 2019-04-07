import { Credentials, Event, Location, Tag, Party } from "../types";
import axios, { AxiosResponse } from "axios";
import store from "../store";
import actions from "../actions";

type Headers = { [key: string]: any };
const API_URL = process.env.REACT_APP_API_URL || "/api";

const get = (path: string) => {
  const headers: Headers = {};
  const auth = store.getState().session;
  if (auth) {
    headers.Authorization = auth;
  }
  return axios({ method: "get", url: API_URL + path, headers });
};

const post = (path: string, data: any) => {
  const headers: Headers = {};
  const auth = localStorage.getItem("auth");
  if (auth) {
    headers.Authorization = auth;
  }
  return axios({ method: "post", url: API_URL + path, headers, data });
};

export function getEvents(party: Party) {
  // TODO: get ${API_URL}/admin/event/party/${party}
}

export async function getParties() {
  try {
    const response: AxiosResponse<Array<Party>> = await get("/admin/party");
    store.dispatch(actions.setParties(response.data));
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

export function postEvent(event: Event) {
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
    // await get("/admin/party");
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
