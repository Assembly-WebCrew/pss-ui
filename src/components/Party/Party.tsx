import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import styled from "styled-components";

import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import eventActions from "../../actions/event";
import { IStoreState, ITag, Action } from "../../types";

const PartyGrid = styled.div`
  width: 100%;
  height: 100%;
`;

class Party extends React.Component<any> {
  public props: any;

  private columnDefs: object[] = [
    { headerName: "Name", field: "name" },
    { headerName: "Location", field: "location.name" },
    { headerName: "Start Time", field: "startTime" },
    { headerName: "Original Start Time", field: "originalStartTime" },
    { headerName: "End Time", field: "endTime" },
    { headerName: "Url", field: "url" },
    { headerName: "Media Url", field: "mediaUrl" },
    {
      field: "tags",
      headerName: "Tags",
      valueFormatter(params: any) {
        return (
          (params.value &&
            params.value.map((tag: ITag) => tag.name).join(", ")) ||
          ""
        );
      }
    },
    { headerName: "Description", field: "description" }
  ];

  public render() {
    return (
      <PartyGrid className="ag-theme-balham">
        <AgGridReact
          columnDefs={this.columnDefs}
          rowData={this.props.events}
          deltaRowDataMode={true}
          enableSorting={true}
          // tslint:disable-next-line:jsx-no-lambda
          getRowNodeId={(data: any) => data.id}
        />
      </PartyGrid>
    );
  }
}

const mapStateToProps = (state: IStoreState) => ({
  events: state.events
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(eventActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Party);
