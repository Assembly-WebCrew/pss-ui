import { Tag, PartyEvent, EventLocation } from "../../../types";
import { RowValueChangedEvent } from "ag-grid-community";

export interface GridProps {
  events: Array<PartyEvent> | undefined;
  locations: Array<EventLocation>;
  tags: Array<Tag>;
  onRowValueChange: (event: RowValueChangedEvent) => void;
}

export const dateFormatter = (params: any) => {
  return params.value ? new Date(params.value).toLocaleString("fi") : "";
};

export const eventLocationFormatter = (params: any) => {
  return params.value ? params.value.name : "";
};

export const tagFormatter = (params: any) => {
  return (
    (params.value && params.value.map((tag: Tag) => tag.name).join(", ")) || ""
  );
};
