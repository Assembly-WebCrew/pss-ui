import { Tag } from "../types";
import { AxiosResponse } from "axios";
import store from "../store";
import actions from "../redux/actions";
import { get, post } from "./api";

export const getTags = async () => {
  try {
    const response: AxiosResponse<Array<Tag>> = await get("/admin/tag");
    store.dispatch(actions.setTags(response.data));
    return true;
  } catch (error) {
    return false;
  }
}

export const addTag = async (tag: Tag) => {
  try {
    const response: AxiosResponse<Tag> = await post("/admin/tag", tag);
    store.dispatch(actions.addTag(response.data));
    return true;
  } catch (error) {
    return false;
  }
}

export const deleteTag = async (id: number) => {
  // TODO: delete ${API_URL}/admin/tag/id/${id}
}
