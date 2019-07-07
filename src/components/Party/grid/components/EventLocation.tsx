import React from "react";
import Select from "../../../Form/Select";
import { ICellEditorParams } from "ag-grid-community";
import { EventLocation as EventLocationT } from "../../../../types";

interface State {
  value: EventLocationT;
}

export default class EventLocation extends React.Component<
  ICellEditorParams,
  State
> {
  constructor(props: ICellEditorParams) {
    super(props);
    this.state = { value: props.value };
  }

  getValue() {
    return this.state.value;
  }

  handleChange = (newValue: any, actionMeta: any) => {
    console.group("Value Changed");
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  handleInputChange = (inputValue: any, actionMeta: any) => {
    console.group("Input Changed");
    console.log(inputValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  render() {
    return (
      <Select
        isMulti={false}
        onChange={this.handleChange}
        // onInputChange={this.handleInputChange}
        value={this.state.value}
        name="location"
        options={[]}
      />
    );
  }
}
