import axios, { Method } from "axios";
import store from "../store";

type Headers = { [key: string]: any };
export const API_URL = process.env.REACT_APP_API_URL || "/api";

export const get = async (path: string, headers: Headers = {}) => call("get", path, undefined, headers);
export const post = async (path: string, data: any) => call("post", path, data);
export const put = async (path: string, data: any) => call("put", path, data);
export const patch = async (path: string, data: any) => call("patch", path, data);
export const remove = async (path: string) => call("delete", path);

const call = async (method: Method, path: string, data: any = undefined, headers: Headers = {}) => {
  const auth = store.getState().session.authorization;
  if (auth) headers.Authorization = auth;
  return axios({ method, url: API_URL + path, headers, data });
}
