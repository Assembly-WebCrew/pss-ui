import * as React from 'react';
import Button, { ButtonStyle } from '../../../Button';
import { ICellEditorParams } from 'ag-grid-community';
import { deleteEvent } from '../../../../services/EventService';

export class Actions extends React.Component<ICellEditorParams> {
  ref?: React.RefObject<HTMLButtonElement>;

  getValue() {
    return '';
  }

  focusIn() {
    if (this.ref && this.ref.current) {
      this.ref.current.focus();
    }
  }

  render() {
    const { api } = this.props;
    if (!api) return '';
    if (this.props.cellStartedEdit !== undefined) {
      this.ref = React.createRef();
      return (
        <>
          <Button ref={this.ref} style={ButtonStyle.Link} onClick={() => api.stopEditing()}>
            Save
          </Button>
          <Button style={ButtonStyle.Link} onClick={() => api.stopEditing(true)}>
            Cancel
          </Button>
        </>
      );
    } else {
      return (
        <>
          <Button
            style={ButtonStyle.Link}
            onClick={() =>
              api.startEditingCell({
                rowIndex: this.props.rowIndex,
                colKey: 'name'
              })
            }
          >
            Edit
          </Button>
          <Button
            style={ButtonStyle.Link}
            onClick={() => {
              const doDelete = window.confirm(`Are you sure you want to delete event '${this.props.data.name}'`);
              if (doDelete) {
                deleteEvent(this.props.data);
              }
            }}
          >
            Delete
          </Button>
        </>
      );
    }
  }
}
