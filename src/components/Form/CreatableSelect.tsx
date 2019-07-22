import React from "react";
import Creatable from "react-select/creatable";
import { InputActionMeta, ActionMeta } from "react-select/src/types";
import { toSelectedOption, toOption, customSelectStyles } from "./utils";

interface SelectProps {
  isMulti: boolean;
  name: string;
  value?: any;
  options: Array<any>;
  onChange?: (value: any, actionMeta: ActionMeta) => void;
  onInputChange?: (value: any, actionMeta: InputActionMeta) => void;
}

const CreatableSelect: React.FunctionComponent<SelectProps> = props => {
  return (
    <Creatable
      styles={customSelectStyles}
      isClearable
      isMulti={props.isMulti}
      name={props.name}
      value={props.value && toSelectedOption(props.value)}
      onChange={props.onChange}
      onInputChange={props.onInputChange}
      options={props.options.map(v =>
        toOption(v, props.isMulti ? props.value : undefined)
      )}
    />
  );
};

export default CreatableSelect;
