import React from "react";
import Select from "../../../Form/Select";
import { ICellEditorParams } from "ag-grid-community";
import { EventLocation as EventLocationT } from "../../../../types";
import { ActionMeta, InputActionMeta } from "react-select/src/types";

interface State {
  value: EventLocationT & { label?: string; value?: any };
}

interface Props extends ICellEditorParams {
  values: () => Array<EventLocationT>;
}

export default class EventLocation extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { value: props.value };
  }

  getValue() {
    return {
      id: this.state.value.id,
      name: this.state.value.label || this.state.value.name,
      description: this.state.value.description,
      url: this.state.value.url
    };
  }

  handleChange = (newValue: any, actionMeta: ActionMeta) => {
    console.group("Value Changed");
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
    this.setState({ value: newValue });
  };
  handleInputChange = (inputValue: any, actionMeta: InputActionMeta) => {
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
        onInputChange={this.handleInputChange}
        value={this.state.value}
        name="location"
        options={this.props.values ? this.props.values() : []}
      />
    );
  }
}
