import * as React from "react";
import { ICellEditorParams } from "ag-grid-community";
import styled from "styled-components";
import { KeyboardDateTimePicker } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

const StyledDatePicker = styled.div`
  .MuiInputBase-root {
    font-size: 1em;
  }
  &&& .ag-theme-material .ag-cell-inline-editing input[type="text"],
  .MuiInputBase-input {
    padding-top: 0;
    padding-bottom: 1px !important;
  }
  .MuiInput-underline:before {
    border-bottom: 2px solid #e2e2e2;
  }
`;

interface State {
  date: MaterialUiPickersDate;
}

export class DatePicker extends React.Component<ICellEditorParams, State> {
  datePicker: any;

  constructor(props: ICellEditorParams) {
    super(props);
    this.state = { date: props.value };
  }

  focusIn(a: any) {
    if (this.datePicker) {
      const input = this.datePicker.getElementsByTagName("input")[0];
      input.focus();
      input.select();
    }
  }

  handleChange = (date: MaterialUiPickersDate) => {
    this.setState({ date: date });
  };

  getValue() {
    if (typeof this.state.date === "number") {
      return this.state.date;
    } else if (this.state.date) {
      return this.state.date.getTime();
    } else {
      return 0;
    }
  }

  render() {
    return (
      <StyledDatePicker ref={ref => (this.datePicker = ref)}>
        <KeyboardDateTimePicker
          ampm={false}
          value={this.state.date}
          onChange={this.handleChange}
          format="dd.MM.yyyy HH:mm"
          clearable
        />
      </StyledDatePicker>
    );
  }
}
