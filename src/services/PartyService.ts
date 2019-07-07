import { Party } from "../types";
import { AxiosResponse } from "axios";
import store from "../store";
import actions from "../redux/actions";
import { get } from "./api";

export const getParties = async () => {
  try {
    const response: AxiosResponse<Array<Party>> = await get("/admin/party");
    store.dispatch(actions.setParties(response.data));
    return true;
  } catch (error) {
    return false;
  }
}

export const addParty = async (party: Party) => {
  const parties = new Set<Party>(store.getState().parties);
  parties.add(party);
  store.dispatch(actions.setParties(Array.from(parties)));
}
