import { EventLocation } from '../types';
import store from '../store';
import actions from '../redux/actions';
import { get, ApiResponse } from './api';

export const getLocations = async () => {
  try {
    const response: ApiResponse<Array<EventLocation>> = await get('/admin/location');
    if (response.data) {
      store.dispatch(actions.setLocations(response.data));
    }
    return !!response.data;
  } catch (error) {
    return false;
  }
};

export const addLocation = async (event: EventLocation) => {
  // TODO: get ${API_URL}/admin/location
};

export const deleteLocation = (id: number) => {
  // TODO: delete ${API_URL}/admin/location/id/${id}
};
