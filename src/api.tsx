import { ICredentials, IEvent, ILocation, ITag, Party } from "./types";

// const API_URL = process.env.REACT_APP_API_URL;

export function getEvents(party: Party) {
  // TODO: get ${API_URL}/api/admin/event/party/${party}
}

export function getParties() {
  // TODO: get ${API_URL}/api/admin/party
}

export function getLocations() {
  // TODO: get ${API_URL}/api/admin/location
}

export function getTags() {
  // TODO: get ${API_URL}/api/admin/tag
}

export function deleteEvent(id: number) {
  // TODO: get ${API_URL}/api/admin/event/id/${id}
}

export function deleteTag(id: number) {
  // TODO: get ${API_URL}/api/admin/tag/id/${id}
}

export function deleteLocation(id: number) {
  // TODO: get ${API_URL}/api/admin/location/id/${id}
}

export function postEvent(event: IEvent) {
  // TODO: get ${API_URL}/api/admin/event
}

export function postTag(event: ITag) {
  // TODO: get ${API_URL}/api/admin/tag
}

export function postLocation(event: ILocation) {
  // TODO: get ${API_URL}/api/admin/location
}

export function login(credentials: ICredentials) {
  // TODO: get ${API_URL}/api/admin/status ?
}

export function logout() {
  // TODO
}
