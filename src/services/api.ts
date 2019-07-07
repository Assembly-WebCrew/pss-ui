import { Credentials, PartyEvent, EventLocation, Tag, Party } from "../types";
import axios, { AxiosResponse } from "axios";
import store from "../store";
import actions from "../redux/actions";

type Headers = { [key: string]: any };
const API_URL = process.env.REACT_APP_API_URL || "/api";

const get = (path: string, headers: Headers = {}) => {
  const auth = store.getState().session.authorization;
  if (auth) {
    headers.Authorization = auth;
  }
  return axios({ method: "get", url: API_URL + path, headers });
};

const post = (path: string, data: any) => {
  const headers: Headers = {};
  const auth = store.getState().session.authorization;
  if (auth) {
    headers.Authorization = auth;
  }
  return axios({ method: "post", url: API_URL + path, headers, data });
};

const remove = (path: string) => {
  const headers: Headers = {};
  const auth = store.getState().session.authorization;
  if (auth) {
    headers.Authorization = auth;
  }
  return axios({ method: "delete", url: API_URL + path, headers });
};

export async function getParties() {
  try {
    const response: AxiosResponse<Array<Party>> = await get("/admin/party");
    store.dispatch(actions.setParties(response.data));
    return true;
  } catch (error) {
    return false;
  }
}

export function addParty(party: Party) {
  const parties = new Set<Party>(store.getState().parties);
  parties.add(party);
  store.dispatch(actions.setParties(Array.from(parties)));
}

export async function getEvents(party: Party) {
  try {
    const response: AxiosResponse<PartyEvent[]> = await get(
      `/admin/event/party/${party}`
    );
    store.dispatch(
      actions.setEvents({
        [party]: response.data.sort((a, b) => a.startTime - b.startTime)
      })
    );
    return true;
  } catch (error) {
    return false;
  }
}

export async function addEvent(event: PartyEvent) {
  try {
    const response: AxiosResponse<PartyEvent> = await post(
      `/admin/event`,
      event
    );
    store.dispatch(actions.addEvent(response.data));
    return true;
  } catch (error) {
    return false;
  }
}

export async function editEvent(event: PartyEvent) {
  try {
    const response: AxiosResponse<PartyEvent> = await post(
      `/admin/event`,
      event
    );
    store.dispatch(actions.editEvent(response.data));
    return true;
  } catch (error) {
    return false;
  }
}

export async function deleteEvent(event: PartyEvent) {
  try {
    await remove("/admin/event/id/" + event.id);
    store.dispatch(actions.removeEvent(event));
    return true;
  } catch (error) {
    return false;
  }
}

export async function getTags() {
  try {
    const response: AxiosResponse<Array<Tag>> = await get("/admin/tag");
    store.dispatch(actions.setTags(response.data));
    return true;
  } catch (error) {
    return false;
  }
}

export async function addTag(tag: Tag) {
  try {
    const response: AxiosResponse<Tag> = await post("/admin/tag", tag);
    store.dispatch(actions.addTag(response.data));
    return true;
  } catch (error) {
    return false;
  }
}

export async function deleteTag(id: number) {
  // TODO: delete ${API_URL}/admin/tag/id/${id}
}

export async function getLocations() {
  try {
    const response: AxiosResponse<Array<EventLocation>> = await get(
      "/admin/location"
    );
    store.dispatch(actions.setLocations(response.data));
    return true;
  } catch (error) {
    return false;
  }
}

export async function addLocation(event: EventLocation) {
  // TODO: get ${API_URL}/admin/location
}

export async function deleteLocation(id: number) {
  // TODO: delete ${API_URL}/admin/location/id/${id}
}

export async function login(credentials: Credentials) {
  try {
    const authorization = `Basic ${btoa(
      credentials.username + ":" + credentials.password
    )}`;
    await get("/admin/party", {
      Authorization: authorization
    });
    store.dispatch(
      actions.setSession({
        isAuthenticated: true,
        authorization
      })
    );
    getTags();
    getLocations();
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
