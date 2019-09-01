import { PartyEvent, Party } from "../types";
import { AxiosResponse } from "axios";
import store from "../store";
import actions from "../redux/actions";
import { get, post, remove, API_URL } from "./api";

export const getEvents = async (party: Party) => {
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

export const addEvent = async (event: PartyEvent) => {
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

export const editEvent = async (event: PartyEvent) => {
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

export const deleteEvent = async (event: PartyEvent) => {
  try {
    await remove("/admin/event/id/" + event.id);
    store.dispatch(actions.removeEvent(event));
    return true;
  } catch (error) {
    return false;
  }
}

export const importEvents = async () => {

}

export const exportEvents = async (partyName: string) => {
  const headers: any = {};
  const auth = store.getState().session.authorization;
  if (auth) headers.Authorization = auth;

  const anchor = document.createElement("a");
  return fetch(API_URL + "/admin/event/party/" + partyName + "/export", { headers })
    .then(response => response.blob())
    .then(blob => {
      const objectUrl = window.URL.createObjectURL(blob);

      anchor.href = objectUrl;
      anchor.download = 'events_' + partyName + '.csv';
      anchor.click();

      window.URL.revokeObjectURL(objectUrl);
    });
}
