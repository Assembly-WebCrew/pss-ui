import React from 'react';
import { ICellEditorParams } from 'ag-grid-community';
import { ActionMeta } from 'react-select/src/types';
import Select from '../../../Form/Select';

type Value = { label?: string; value: any };

interface State {
  value: Value;
}

interface Props extends ICellEditorParams {
  values: Array<Value>;
}

export default class Dropdown extends React.Component<Props, State> {
  selectRef?: React.RefObject<any>;

  constructor(props: Props) {
    super(props);
    this.selectRef = React.createRef();
    this.state = {
      value: this.props.values.find(v => v.value === props.value)!
    };
  }

  getValue() {
    return this.state.value.value;
  }

  focusIn(a: any) {
    if (this.selectRef && this.selectRef.current.select) {
      this.selectRef.current.select.focus();
    }
  }

  handleChange = (newValue: any, actionMeta: ActionMeta) => {
    this.setState({ value: newValue });
  };

  render() {
    return <Select innerRef={this.selectRef} onChange={this.handleChange} value={this.state.value} options={this.props.values} />;
  }
}
