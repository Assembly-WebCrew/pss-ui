import * as React from "react";
import Button, { ButtonStyle } from "../../../Button";
import { ICellEditorParams } from "ag-grid-community";

export class Actions extends React.Component<ICellEditorParams> {
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
    const { api } = this.props;
    if (!api) return "";
    if (this.props.cellStartedEdit !== undefined) {
      this.ref = React.createRef();
      return (
        <>
          <Button
            ref={this.ref}
            style={ButtonStyle.Link}
            onClick={() => api.stopEditing()}
          >
            Save
          </Button>
          <Button
            style={ButtonStyle.Link}
            onClick={() => api.stopEditing(true)}
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
            api.startEditingCell({
              rowIndex: this.props.rowIndex,
              colKey: "name"
            })
          }
        >
          Edit event
        </Button>
      );
    }
  }
}
