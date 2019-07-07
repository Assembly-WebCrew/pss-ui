import { EventLocation } from "../types";
import { AxiosResponse } from "axios";
import store from "../store";
import actions from "../redux/actions";
import { get } from "./api";


export const getLocations = async () => {
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

export const addLocation = async (event: EventLocation) => {
  // TODO: get ${API_URL}/admin/location
}

export const deleteLocation = (id: number) => {
  // TODO: delete ${API_URL}/admin/location/id/${id}
}
