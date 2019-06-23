import * as React from "react";
import { Link } from "react-router-dom";
import Button, { ButtonStyle } from "../../../Button";

export class Actions extends React.Component<any> {
  getValue() {
    return "";
  }

  render() {
    console.log(this.props);
    if (this.props.stopEditing) {
      return (
        <Button
          style={ButtonStyle.Link}
          onClick={() => this.props.api.stopEditing(true)}
        >
          Cancel
        </Button>
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
