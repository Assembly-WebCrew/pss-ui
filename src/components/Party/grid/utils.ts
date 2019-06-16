import { Tag, PartyEvent } from "../../../types";
import { RowValueChangedEvent } from "ag-grid-community";

export interface GridProps {
  events: Array<PartyEvent> | undefined;
  onRowValueChange: (event: RowValueChangedEvent) => void;
}

export const dateFormatter = (params: any) => {
  return params.value ? new Date(params.value).toLocaleString("fi") : "";
};

export const tagFormatter = (params: any) => {
  return (
    (params.value && params.value.map((tag: Tag) => tag.name).join(", ")) || ""
  );
};
