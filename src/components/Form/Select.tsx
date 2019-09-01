import React from "react";
import ReactSelect from "react-select";
import { InputActionMeta, ActionMeta } from "react-select/src/types";
import { customSelectStyles } from "./utils";

interface SelectProps {
  isMulti?: boolean;
  isSearchable?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  name?: string;
  value?: any;
  innerRef?: React.RefObject<any>;
  options: Array<any>;
  onChange?: (value: any, actionMeta: ActionMeta) => void;
  onInputChange?: (value: any, actionMeta: InputActionMeta) => void;
}

const Select: React.FunctionComponent<SelectProps> = props => {
  return (
    <ReactSelect
      ref={props.innerRef}
      styles={customSelectStyles}
      isSearchable={props.isSearchable}
      isMulti={props.isMulti}
      isDisabled={props.isDisabled}
      isLoading={props.isLoading}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onInputChange={props.onInputChange}
      options={props.options}
    />
  );
};

export default Select;
