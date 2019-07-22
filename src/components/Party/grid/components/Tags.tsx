import React from "react";
import CreatableSelect from "../../../Form/CreatableSelect";
import { ICellEditorParams } from "ag-grid-community";
import { Tag } from "../../../../types";
import { ActionMeta, InputActionMeta } from "react-select/src/types";

type Value = Tag & { label?: string; value?: any };

interface State {
  value: Array<Value>;
}

interface Props extends ICellEditorParams {
  values: () => Array<Tag>;
}

export default class Tags extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { value: props.value };
  }

  getValue() {
    return this.state.value.map((v: Value) => ({
      id: v.id,
      name: v.label || v.name
    }));
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
      <CreatableSelect
        isMulti={true}
        onChange={this.handleChange}
        onInputChange={this.handleInputChange}
        value={this.state.value}
        name="tags"
        options={this.props.values ? this.props.values() : []}
      />
    );
  }
}
