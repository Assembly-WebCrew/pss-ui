import * as React from 'react';
import Input from '../Form/Input';
import Button, { ButtonStyle } from '../Button';
import Toggle from '../Form/Toggle';
import Form from '../Form';
import Field from '../Form/Field';
import Textarea from '../Form/Textarea';
import { PartyEvent, Party, EventLocation, StoreState } from '../../types';
import { RouteComponentProps } from 'react-router';
import store from '../../store';
import { addEvent, editEvent } from '../../services/EventService';
import { getLocations } from '../../services/LocationService';
import { getTags } from '../../services/TagService';
import { connect } from 'react-redux';
import CreatableSelect from '../Form/CreatableSelect';

interface EventProps extends RouteComponentProps {
  locations: EventLocation[];
}

interface EventState {
  event?: PartyEvent;
}

class Event extends React.Component<EventProps, EventState> {
  state: EventState = {};

  componentDidMount() {
    getLocations();
    getTags();

    if (this.props.match && this.props.match.params.hasOwnProperty('event')) {
      const params: { [key: string]: string } = this.props.match.params;
      const event: string = params.event;

      if (event !== 'new') {
        const events: Array<PartyEvent> | undefined = store.getState().events[params.party];
        if (events) {
          this.setState({
            event: events.find(e => e.id === +event)
          });
        }
      }
    }
  }

  getLocation(data: any): EventLocation {
    const eventLocation = this.props.locations.find(location => location.id === +data);
    if (!eventLocation) {
      return { id: 0, name: data };
    }
    return eventLocation;
  }

  getDate(date?: number): string {
    if (date) {
      return new Date(date).toISOString();
    }
    return '';
  }

  parseEvent(data: any, party: Party): PartyEvent {
    const elements = data.elements;
    return {
      id: 0,
      party,
      name: elements.name.value,
      isPublic: elements.isPublic.checked,
      location: this.getLocation(elements.location.value),
      description: elements.description.value,
      mediaUrl: elements.mediaUrl.value,
      url: elements.url.value,
      startTime: new Date(elements.startTime.value).getTime(),
      endTime: new Date(elements.endTime.value).getTime(),
      originalStartTime: elements.originalStartTime.value ? new Date(elements.originalStartTime.value).getTime() : new Date(elements.startTime.value).getTime(),
      prepStartTime: elements.prepStartTime.value ? new Date(elements.prepStartTime.value).getTime() : undefined,
      postEndTime: elements.postEndTime.value ? new Date(elements.postEndTime.value).getTime() : undefined
    };
  }

  onAddEvent = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params: { [key: string]: string } = this.props.match.params;
    const partyEvent: PartyEvent = this.parseEvent(event.target, params.party || '');
    let success;

    if (this.state.event && this.state.event.id) {
      success = await editEvent({
        ...this.state.event,
        ...partyEvent,
        id: this.state.event.id
      });
    } else {
      success = await addEvent(partyEvent);
    }
    if (success) {
      this.goToParty();
    }
  };

  goToParty = () => {
    const params: { [key: string]: string } = this.props.match.params;
    this.props.history.push(`/parties/${params.party || ''}`);
  };

  render() {
    return (
      <Form onSubmit={this.onAddEvent}>
        <Field title="Name">
          <Input type="text" name="name" placeholder="Event name" defaultValue={this.state.event && this.state.event.name} required />
        </Field>
        <Field title="Is public?">
          <Toggle name="isPublic" selected={this.state.event && this.state.event.isPublic} />
        </Field>
        <Field title="Location">
          <CreatableSelect name="location" isMulti={false} options={this.props.locations} value={this.state.event && this.state.event.location} />
        </Field>
        <Field title="Url">
          <Input type="text" name="url" placeholder="Url" defaultValue={(this.state.event && this.state.event.url) || ''} />
        </Field>
        <Field title="Media url">
          <Input type="text" name="mediaUrl" placeholder="Media url (ie. stream url)" defaultValue={(this.state.event && this.state.event.mediaUrl) || ''} />
        </Field>
        <Field title="Start time">
          <Input
            type="datetime-local"
            name="startTime"
            placeholder="Start time"
            defaultValue={(this.state.event && this.getDate(this.state.event.startTime)) || ''}
          />
        </Field>
        <Field title="Original start time">
          <Input
            type="datetime-local"
            name="originalStartTime"
            placeholder="Original start time"
            defaultValue={this.state.event && this.getDate(this.state.event.originalStartTime)}
          />
        </Field>
        <Field title="End time">
          <Input type="datetime-local" name="endTime" placeholder="End time" defaultValue={this.state.event && this.getDate(this.state.event.endTime)} />
        </Field>
        <Field title="Prep start time">
          <Input
            type="datetime-local"
            name="prepStartTime"
            placeholder="Prep start time"
            defaultValue={this.state.event && this.getDate(this.state.event.prepStartTime)}
          />
        </Field>
        <Field title="Post end time">
          <Input
            type="datetime-local"
            name="postEndTime"
            placeholder="Post end time"
            defaultValue={this.state.event && this.getDate(this.state.event.postEndTime)}
          />
        </Field>
        <Field title="Description">
          <Textarea name="description" placeholder="Short description of the event" defaultValue={(this.state.event && this.state.event.description) || ''} />
        </Field>
        <div>
          <Button style={ButtonStyle.Blue} type="submit">
            Add event
          </Button>
          <Button style={ButtonStyle.Normal} type="button" onClick={this.goToParty}>
            Cancel
          </Button>
        </div>
      </Form>
    );
  }
}

const mapStateToProps = (state: StoreState) => {
  return {
    locations: state.locations
  };
};

export default connect(mapStateToProps)(Event);
