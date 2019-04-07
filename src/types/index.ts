export * from "./actions";

export interface Credentials {
  username: string;
  password: string;
}

export interface Session {
  credentials?: Credentials;
  isAuthenticated: boolean;
}

export interface Event {
  description?: string;
  endTime: number;
  id: number;
  location: Location;
  mediaUrl?: string;
  name: string;
  originalStartTime: number;
  party: string;
  startTime: number;
  tags?: Array<Tag>;
  url?: string;
  isPublic: boolean;
  prepStartTime?: number;
  postEndTime?: number;
}

export interface Location {
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

export interface StoreState {
  session: Session;
  events: Event[];
  parties: Party[];
  activeParty?: Party;
}
