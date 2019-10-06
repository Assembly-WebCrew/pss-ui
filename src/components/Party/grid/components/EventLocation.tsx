import React from 'react';
import CreatableSelect from '../../../Form/CreatableSelect';
import { ICellEditorParams } from 'ag-grid-community';
import { EventLocation as EventLocationT } from '../../../../types';

type Value = EventLocationT & { label?: string; value?: any };

interface State {
  value: Value;
}

interface Props extends ICellEditorParams {
  values: () => Array<EventLocationT>;
}

export default class EventLocation extends React.Component<Props, State> {
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
      name: value.label || value.name,
      description: value.description,
      url: value.url
    };
  }

  getValue() {
    return this.mapValue(this.state.value);
  }

  focusIn() {
    if (this.selectRef && this.selectRef.current.select.select) {
      this.selectRef.current.select.select.focus();
    }
  }

  handleChange = (newValue: Value) => {
    this.setState({ value: this.mapValue(newValue) });
  };

  render() {
    const values = this.props.values ? this.props.values() : [];

    if (this.state.value) {
      const index = values.findIndex(v => v.name === this.state.value.name);
      if (index === -1) {
        values.push(this.getValue());
      } else if (values[index].id && !this.state.value.id) {
        this.setState({ value: values[index] });
      }
    }

    return <CreatableSelect innerRef={this.selectRef} isMulti={false} onChange={this.handleChange} value={this.state.value} name="location" options={values} />;
  }
}
