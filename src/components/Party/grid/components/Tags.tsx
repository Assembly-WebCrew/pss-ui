import React from 'react';
import CreatableSelect from '../../../Form/CreatableSelect';
import { ICellEditorParams } from 'ag-grid-community';
import { Tag } from '../../../../types';

type Value = Tag & { label?: string; value?: any };

interface State {
  value: Array<Value>;
}

interface Props extends ICellEditorParams {
  values: () => Array<Tag>;
}

export default class Tags extends React.Component<Props, State> {
  selectRef?: React.RefObject<any>;

  constructor(props: Props) {
    super(props);
    this.selectRef = React.createRef();
    this.state = { value: props.value };
  }

  mapValue(value: Value) {
    return {
      ...value,
      id: value.id,
      name: value.label || value.name
    };
  }

  getValue() {
    return this.state.value.map(this.mapValue);
  }

  focusIn() {
    if (this.selectRef && this.selectRef.current.select.select) {
      this.selectRef.current.select.select.focus();
    }
  }

  handleChange = (newValue: Array<Value>) => {
    this.setState({ value: newValue.map(this.mapValue) });
  };

  render() {
    return (
      <CreatableSelect
        innerRef={this.selectRef}
        isMulti={true}
        onChange={this.handleChange}
        value={this.state.value}
        name="tags"
        options={this.props.values ? this.props.values() : []}
      />
    );
  }
}
