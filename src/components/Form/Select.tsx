import React from "react";
import { Creatable } from "react-select";

interface SelectAction {
  action:
    | "clear"
    | "create-option"
    | "deselect-option"
    | "pop-value"
    | "remove-value"
    | "select-option"
    | "set-value";
}

interface SelectProps {
  isMulti: boolean;
  name: string;
  value?: any;
  options: Array<any>;
  onChange?: (value: any, actionMeta: SelectAction) => void;
}

const toOption = (data: any) => ({
  ...data,
  value: data.id,
  label: data.name
});

const Select: React.FunctionComponent<SelectProps> = props => {
  return (
    <Creatable
      isMulti={props.isMulti}
      name={props.name}
      value={props.value && toOption(props.value)}
      onChange={props.onChange}
      options={props.options.map(toOption)}
    />
  );
};

export default Select;
