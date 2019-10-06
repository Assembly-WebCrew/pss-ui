import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

import { StoreState, PartyEvent, Party as IParty, EventLocation, Tag } from '../../types';
import { RouteComponentProps } from 'react-router';
import { getEvents, editEvent } from '../../services/EventService';
import { getTags } from '../../services/TagService';
import { getLocations } from '../../services/LocationService';
import Button from '../Button';
import { Link } from 'react-router-dom';
import BasicGrid from './grid/BasicGrid';
import { RowValueChangedEvent } from 'ag-grid-community';

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
  locations: Array<EventLocation>;
  tags: Array<Tag>;
}
interface PartyState {
  party: IParty;
}

class Party extends React.Component<PartyProps, PartyState> {
  state: PartyState = {
    party: ''
  };

  componentDidMount() {
    if (this.props.match && this.props.match.params.hasOwnProperty('party')) {
      const params: { [key: string]: string } = this.props.match.params;
      this.setState({ party: params.party });
      getEvents(params.party);
    }
    getLocations().then(getTags);
  }

  onUpdateEvent = async (event: RowValueChangedEvent) => {
    if (event.data) {
      const success = await editEvent({
        ...event.data
      });
      if (!success) {
        // TODO: error handling
      }
    }
  };

  render() {
    return (
      <Container>
        <EventActions>
          <Link to={`/parties/${this.state.party}/new`}>
            <Button>Add event</Button>
          </Link>
        </EventActions>
        <PartyGrid className="ag-theme-material">
          <BasicGrid events={this.props.events} locations={this.props.locations} tags={this.props.tags} onRowValueChange={this.onUpdateEvent} />
        </PartyGrid>
      </Container>
    );
  }
}

const mapStateToProps = (state: StoreState, ownProps: PartyProps) => {
  const params: { [key: string]: string } = (ownProps.match && ownProps.match.params.hasOwnProperty('party') && ownProps.match.params) || '';

  return {
    events: state.events[params.party],
    locations: state.locations,
    tags: state.tags
  };
};

export default connect(mapStateToProps)(Party);
