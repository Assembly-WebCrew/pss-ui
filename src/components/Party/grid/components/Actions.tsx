import * as React from "react";
import Button, { ButtonStyle } from "../../../Button";

export class Actions extends React.Component<any> {
  ref?: React.RefObject<HTMLButtonElement>;

  getValue() {
    return "";
  }

  focusIn() {
    if (this.ref && this.ref.current) {
      this.ref.current.focus();
    }
  }

  render() {
    if (this.props.cellStartedEdit !== undefined) {
      this.ref = React.createRef();
      return (
        <>
          <Button
            ref={this.ref}
            style={ButtonStyle.Link}
            onClick={() => this.props.api.stopEditing()}
          >
            Save
          </Button>
          <Button
            style={ButtonStyle.Link}
            onClick={() => this.props.api.stopEditing(true)}
          >
            Cancel
          </Button>
        </>
      );
    } else {
      return (
        // <Link to={`/parties/${this.props.data.party}/${this.props.data.id}`}>
        //   Edit event
        // </Link>
        <Button
          style={ButtonStyle.Link}
          onClick={() =>
            this.props.api.startEditingCell({
              rowIndex: this.props.rowIndex,
              colKey: "name",
              rowPinned: false,
              keyPress: null,
              charPress: null
            })
          }
        >
          Edit event
        </Button>
      );
    }
  }
}
