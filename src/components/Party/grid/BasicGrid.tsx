import * as React from "react";
import { AgGridReact } from "ag-grid-react";
import { GridOptions } from "ag-grid-community";
import { DatePicker } from "./components/DatePicker";
import { Actions } from "./components/Actions";
import { dateFormatter, tagFormatter, GridProps } from "./utils";
import styled from "styled-components";

const Grid = styled.div`
  width: 100%;
  height: 100%;

  & .ag-cell.ag-cell-inline-editing {
    overflow: visible;
  }

  div.ag-cell-edit-input {
    display: flex;
    align-items: center;
    height: 100%;
    line-height: normal;
    position: relative;
  }
  select.ag-cell-edit-input {
    background: transparent;
    color: rgba(0, 0, 0, 0.87);
    font-family: inherit;
    font-size: inherit;
    height: 40px !important;
    padding-bottom: 8px;
    border-width: 0;
    border-bottom: 2px solid #e2e2e2;
  }
`;

class BasicGrid extends React.Component<GridProps> {
  gridOptions: GridOptions = {
    reactNext: true,
    editType: "fullRow",
    defaultColDef: {
      sortable: true,
      resizable: true,
      filter: false,
      editable: true,
      minWidth: 50
    },
    deltaRowDataMode: true,
    columnDefs: [
      { headerName: "Name", field: "name", minWidth: 100 },
      { headerName: "Location", field: "location.name" },
      {
        headerName: "Public",
        field: "isPublic",
        maxWidth: 100,
        cellEditor: "agSelectCellEditor",
        cellEditorParams: {
          values: [true, false]
        }
      },
      {
        headerName: "Prep Start Time",
        field: "prepStartTime",
        valueFormatter: dateFormatter,
        cellEditor: "datePicker"
      },
      {
        headerName: "Start Time",
        field: "startTime",
        valueFormatter: dateFormatter,
        cellEditor: "datePicker"
      },
      {
        headerName: "Original Start Time",
        field: "originalStartTime",
        valueFormatter: dateFormatter,
        cellEditor: "datePicker"
      },
      {
        headerName: "End Time",
        field: "endTime",
        valueFormatter: dateFormatter,
        cellEditor: "datePicker"
      },
      {
        headerName: "Post End Time",
        field: "postEndTime",
        valueFormatter: dateFormatter,
        cellEditor: "datePicker"
      },
      { headerName: "Url", field: "url" },
      { headerName: "Media Url", field: "mediaUrl" },
      {
        field: "tags",
        headerName: "Tags",
        valueFormatter: tagFormatter
      },
      { headerName: "Description", field: "description" },
      {
        headerName: "Actions",
        field: "actions",
        cellRenderer: "actionsRenderer",
        cellEditor: "actionsRenderer"
      }
    ],
    onGridReady: (params: GridOptions) =>
      params.api && params.api.sizeColumnsToFit(),
    getRowNodeId: (data: any) => data.id,
    frameworkComponents: {
      actionsRenderer: Actions,
      datePicker: DatePicker
    }
  };

  render() {
    return (
      <Grid>
        <AgGridReact
          gridOptions={this.gridOptions}
          rowData={this.props.events}
          onRowValueChanged={this.props.onRowValueChange}
        />
      </Grid>
    );
  }
}

export default BasicGrid;
