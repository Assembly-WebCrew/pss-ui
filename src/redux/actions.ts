import {
  ActionType,
  PartyEvent,
  PartyEvents,
  EventLocation,
  Party,
  Session,
  Tag,
  AddEvent,
  EditEvent,
  RemoveEvent,
  SetEvents,
  SetLocations,
  AddParty,
  SetParties,
  SetSession,
  SetTags,
  AddTag
} from "../types";

export default {

  // Events

  addEvent: (payload: PartyEvent): AddEvent => ({ payload, type: ActionType.ADD_EVENT }),
  editEvent: (payload: PartyEvent): EditEvent => ({ payload, type: ActionType.EDIT_EVENT }),
  removeEvent: (payload: PartyEvent): RemoveEvent => ({ payload, type: ActionType.REMOVE_EVENT }),
  setEvents: (payload: PartyEvents): SetEvents => ({ payload, type: ActionType.SET_EVENTS }),

  // Locations

  setLocations: (payload: Array<EventLocation>): SetLocations => ({ payload, type: ActionType.SET_LOCATIONS }),

  // Parties

  addParty: (payload: Party): AddParty => ({ payload, type: ActionType.ADD_PARTY }),
  setParties: (payload: Array<Party>): SetParties => ({ payload, type: ActionType.SET_PARTIES }),

  // Session

  setSession: (payload: Session): SetSession => ({ payload, type: ActionType.SET_SESSION }),

  // Tags

  setTags: (payload: Array<Tag>): SetTags => ({ payload, type: ActionType.SET_TAGS }),
  addTag: (payload: Tag): AddTag => ({ payload, type: ActionType.ADD_TAG })

}
