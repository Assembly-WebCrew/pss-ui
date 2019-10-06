import { Credentials } from '../types';
import store from '../store';
import actions from '../redux/actions';
import { getTags } from './TagService';
import { getLocations } from './LocationService';
import { get } from './api';

export const login = async (credentials: Credentials) => {
  try {
    const authorization = `Basic ${btoa(credentials.username + ':' + credentials.password)}`;
    await get('/admin/party', {
      Authorization: authorization
    });
    store.dispatch(
      actions.setSession({
        isAuthenticated: true,
        authorization
      })
    );
    getLocations().then(getTags);
    return true;
  } catch (error) {
    return false;
  }
};

export const logout = () => {
  store.dispatch(
    actions.setSession({
      isAuthenticated: false
    })
  );
};
