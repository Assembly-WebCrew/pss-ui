export interface IEvent {
  description?: string;
  endTime: number;
  id: number;
  location: ILocation,
  mediaUrl?: string;
  name: string;
  originalStartTime: number;
  party: string;
  startTime: number;
  tags?: ITag[];
  url?: string;
};

export interface ILocation {
  description?: string;
  id: number;
  name: string;
  url?: string;
}

export interface ITag {
  name: string;
  id: number;
}

export type Party = string;

export interface IStoreState {
  events: IEvent[];
  parties: Party[];
}