import React from "react";
import { ICellEditorParams } from "ag-grid-community";
import { ActionMeta, InputActionMeta } from "react-select/src/types";
import Select from "../../../Form/Select";

type Value = { label?: string; value: any };

interface State {
  value: Value;
}

interface Props extends ICellEditorParams {
  values: Array<Value>;
}

export default class Dropdown extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: this.props.values.find(v => v.value === props.value)!
    };
  }

  getValue() {
    return this.state.value.value;
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
        onChange={this.handleChange}
        onInputChange={this.handleInputChange}
        value={this.state.value}
        options={this.props.values}
      />
    );
  }
}
