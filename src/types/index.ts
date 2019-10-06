export * from './actions';

export interface Credentials {
  username: string;
  password: string;
}

export type Authorization = string;

export interface Session {
  authorization?: Authorization;
  isAuthenticated: boolean;
}

export interface PartyEvent {
  id: number;
  description?: string;
  endTime: number;
  location: EventLocation;
  mediaUrl?: string;
  name: string;
  originalStartTime?: number;
  party: string;
  startTime: number;
  tags?: Array<Tag>;
  url?: string;
  isPublic: boolean;
  prepStartTime?: number;
  postEndTime?: number;
}

export interface EventLocation {
  description?: string;
  id: number;
  name: string;
  url?: string;
}

export interface Tag {
  name: string;
  id: number;
}

export type Party = string;

export type PartyEvents = { [key: string]: Array<PartyEvent> | undefined };

export interface StoreState {
  session: Session;
  events: PartyEvents;
  parties: Party[];
  locations: EventLocation[];
  tags: Tag[];
}
