import { combineReducers, Reducer } from 'redux';
import events from './events';
import locations from './locations';
import parties from './parties';
import session from './session';
import tags from './tags';
import { StoreState } from '../../types';

export default combineReducers({
  events,
  locations,
  parties,
  session,
  tags
}) as Reducer<StoreState>;
