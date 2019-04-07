export * from "./actions";

export interface ICredentials {
  username: string;
  password: string;
}

export interface IEvent {
  description?: string;
  endTime: number;
  id: number;
  location: ILocation;
  mediaUrl?: string;
  name: string;
  originalStartTime: number;
  party: string;
  startTime: number;
  tags?: ITag[];
  url?: string;
}

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
  session: any;
  events: IEvent[];
  parties: Party[];
}

/*
Event{
description	string
endTime	integer($int64)
id	integer($int32)
isPublic	boolean
location	Location{
description	string
id	integer($int32)
name	string
url	string
}
mediaUrl	string
name	string
originalStartTime	integer($int64)
party	string
postEndTime	integer($int64)
prepStartTime	integer($int64)
startTime	integer($int64)
tags	[Tag{
id	integer($int32)
name	string
}]
url	string
}
*/
