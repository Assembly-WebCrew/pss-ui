import store from "../store";

type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

type Headers = { [key: string]: any };

export interface ApiResponse<T> {
  data: T,
  fetchResponse: Response
}

export const API_URL = process.env.REACT_APP_API_URL || "/api";

export const get = async <T>(path: string, headers: Headers = {}) => call<T>("GET", path, undefined, headers);
export const post = async <T>(path: string, data: any) => call<T>("POST", path, data);
export const put = async <T>(path: string, data: any) => call<T>("PUT", path, data);
export const patch = async <T>(path: string, data: any) => call<T>("PATCH", path, data);
export const remove = async <T>(path: string) => call<T>("DELETE", path);

const call = async <T>(method: Method, path: string, body: any = undefined, headers: Headers = {}): Promise<ApiResponse<T>> => {
  const auth = store.getState().session.authorization;
  if (auth) headers.Authorization = auth;
  if (typeof body === 'object') {
    body = JSON.stringify(body);
    headers['Content-Type'] = 'application/json';
  }
  const fetchResponse = await fetch(API_URL + path, {
    method,
    headers,
    body
  });
  const data: T = await fetchResponse.json();
  return { data, fetchResponse };
}
