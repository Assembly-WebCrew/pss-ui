import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import { StoreState, Tag, PartyEvent } from "../../types";
import { RouteComponentProps } from "react-router";
import { getEvents } from "../../services/api";
import { GridOptions, ColDef, ColGroupDef } from "ag-grid-community";

const PartyGrid = styled.div`
  width: 100%;
  height: 100%;
`;

interface PartyProps extends RouteComponentProps {
  events: Array<PartyEvent> | undefined;
}

class Party extends React.Component<PartyProps> {
  private gridOptions: GridOptions = {
    defaultColDef: {
      sortable: true,
      resizable: true,
      filter: true
    },
    deltaRowDataMode: true,
    columnDefs: [
      { headerName: "Name", field: "name" },
      { headerName: "Location", field: "location.name" },
      { headerName: "Public", field: "isPublic" },
      { headerName: "Prep Start Time", field: "prepStartTime" },
      { headerName: "Start Time", field: "startTime" },
      { headerName: "Original Start Time", field: "originalStartTime" },
      { headerName: "End Time", field: "endTime" },
      { headerName: "Post End Time", field: "postEndTime" },
      { headerName: "Url", field: "url" },
      { headerName: "Media Url", field: "mediaUrl" },
      {
        field: "tags",
        headerName: "Tags",
        valueFormatter(params: any) {
          return (
            (params.value &&
              params.value.map((tag: Tag) => tag.name).join(", ")) ||
            ""
          );
        }
      },
      { headerName: "Description", field: "description" }
    ],
    getRowNodeId: (data: any) => data.id
  };

  public componentDidMount() {
    if (this.props.match && this.props.match.params.hasOwnProperty("party")) {
      const params: { [key: string]: string } = this.props.match.params;
      getEvents(params.party);
    }
  }

  public render() {
    return (
      <PartyGrid className="ag-theme-balham">
        <AgGridReact
          gridOptions={this.gridOptions}
          rowData={this.props.events}
        />
      </PartyGrid>
    );
  }
}

const mapStateToProps = (state: StoreState) => ({
  events: state.events
});

export default connect(mapStateToProps)(Party);
