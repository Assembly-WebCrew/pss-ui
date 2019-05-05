import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import { StoreState, Tag, PartyEvent, Party as IParty } from "../../types";
import { RouteComponentProps } from "react-router";
import { getEvents } from "../../services/api";
import { GridOptions } from "ag-grid-community";
import Button from "../Button";
import { Link } from "react-router-dom";

const dateFormatter = (params: any) => {
  return params.value ? new Date(params.value).toLocaleString("fi") : "";
};

const PartyGrid = styled.div`
  width: 100%;
  height: 100%;
`;

const EventActions = styled.div`
  width: 100%;
  height: 60px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

interface PartyProps extends RouteComponentProps {
  events: Array<PartyEvent> | undefined;
}
interface PartyState {
  party: IParty;
}

class Party extends React.Component<PartyProps, PartyState> {
  state: PartyState = {
    party: ""
  };
  gridOptions: GridOptions = {
    defaultColDef: {
      sortable: true,
      resizable: true,
      filter: false,
      minWidth: 50
    },
    deltaRowDataMode: true,
    columnDefs: [
      { headerName: "Name", field: "name", minWidth: 100 },
      { headerName: "Location", field: "location.name" },
      { headerName: "Public", field: "isPublic" },
      {
        headerName: "Prep Start Time",
        field: "prepStartTime",
        valueFormatter: dateFormatter
      },
      {
        headerName: "Start Time",
        field: "startTime",
        valueFormatter: dateFormatter
      },
      {
        headerName: "Original Start Time",
        field: "originalStartTime",
        valueFormatter: dateFormatter
      },
      {
        headerName: "End Time",
        field: "endTime",
        valueFormatter: dateFormatter
      },
      {
        headerName: "Post End Time",
        field: "postEndTime",
        valueFormatter: dateFormatter
      },
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
    onGridReady: (params: GridOptions) =>
      params.api && params.api.sizeColumnsToFit(),
    getRowNodeId: (data: any) => data.id
  };

  componentDidMount() {
    if (this.props.match && this.props.match.params.hasOwnProperty("party")) {
      const params: { [key: string]: string } = this.props.match.params;
      this.setState({ party: params.party });
      getEvents(params.party);
    }
  }

  // onAddEvent = () => {
  //   this.setState({
  //     showModal: true
  //   });
  // };

  // onCloseModal = () => {
  //   this.setState({
  //     showModal: false
  //   });
  // };

  render() {
    return (
      <Container>
        <EventActions>
          <Link to={`/parties/${this.state.party}/new`}>
            <Button>Add event</Button>
          </Link>
        </EventActions>
        <PartyGrid className="ag-theme-balham">
          <AgGridReact
            gridOptions={this.gridOptions}
            rowData={this.props.events}
          />
        </PartyGrid>
      </Container>
    );
  }
}

const mapStateToProps = (state: StoreState, ownProps: PartyProps) => {
  const params: { [key: string]: string } =
    (ownProps.match &&
      ownProps.match.params.hasOwnProperty("party") &&
      ownProps.match.params) ||
    "";

  return {
    events: state.events[params.party]
  };
};

export default connect(mapStateToProps)(Party);
