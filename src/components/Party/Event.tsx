import * as React from "react";
import Input from "../Form/Input";
import Button, { ButtonStyle } from "../Button";
import Toggle from "../Form/Toggle";
import Form from "../Form";
import Field from "../Form/Field";
import Textarea from "../Form/Textarea";
import { PartyEvent } from "../../types";
import { RouteComponentProps } from "react-router";
import store from "../../store";

interface EventProps extends RouteComponentProps {}

interface EventState {
  event?: PartyEvent;
}

class Event extends React.Component<EventProps, EventState> {
  componentDidMount() {
    if (this.props.match && this.props.match.params.hasOwnProperty("event")) {
      const params: { [key: string]: string } = this.props.match.params;
      const event: string = params.event;

      if (event !== "new") {
        const events: Array<PartyEvent> | undefined = store.getState().events[
          params.party
        ];
        if (events) {
          this.setState({
            event: events.find(e => e.id === +event)
          });
        }
      }
    }
  }

  onAddEvent = (event: React.FormEvent<any>) => {
    event.preventDefault();
    const params: { [key: string]: string } = this.props.match.params;
    this.props.history.push(`/parties/${params.party || ""}`);
  };

  render() {
    return (
      <Form onSubmit={this.onAddEvent}>
        <Field title="Name">
          <Input type="text" name="name" placeholder="Event name" />
        </Field>
        <Field title="Is public?">
          <Toggle />
        </Field>
        <Field title="Url">
          <Input type="text" name="url" placeholder="Url" />
        </Field>
        <Field title="Media url">
          <Input
            type="text"
            name="mediaUrl"
            placeholder="Media url (ie. stream url)"
          />
        </Field>
        <Field title="Start time">
          <Input
            type="datetime-local"
            name="startTime"
            placeholder="Start time"
          />
        </Field>
        <Field title="Original start time">
          <Input
            type="datetime-local"
            name="originalStartTime"
            placeholder="Original start time"
          />
        </Field>
        <Field title="End time">
          <Input type="datetime-local" name="endTime" placeholder="End time" />
        </Field>
        <Field title="Prep start time">
          <Input
            type="datetime-local"
            name="prepStartTime"
            placeholder="Prep start time"
          />
        </Field>
        <Field title="Post end time">
          <Input
            type="datetime-local"
            name="postEndTime"
            placeholder="Post end time"
          />
        </Field>
        <Field title="Description">
          <Textarea
            name="description"
            placeholder="Short description of the event"
          />
        </Field>
        <div>
          <Button style={ButtonStyle.Blue} type="submit">
            Add event
          </Button>
        </div>
      </Form>
    );
  }
}

export default Event;
