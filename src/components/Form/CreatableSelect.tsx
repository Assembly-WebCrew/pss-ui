import React from "react";
import Creatable from "react-select/creatable";
import { InputActionMeta, ActionMeta } from "react-select/src/types";
import { toSelectedOption, toOption, customSelectStyles } from "./utils";
import { SelectComponentsProps } from "react-select/src/Select";

interface SelectProps extends SelectComponentsProps {
  isMulti: boolean;
  name: string;
  value?: any;
  innerRef?: React.RefObject<any>;
  options: Array<any>;
  onChange?: (value: any, actionMeta: ActionMeta) => void;
  onInputChange?: (value: any, actionMeta: InputActionMeta) => void;
}

const CreatableSelect: React.FunctionComponent<SelectProps> = props => {
  const {
    isMulti,
    name,
    value,
    options,
    onChange,
    onInputChange,
    innerRef,
    ...rest
  } = props;
  return (
    <Creatable
      styles={customSelectStyles}
      isClearable
      isMulti={isMulti}
      name={name}
      value={value && toSelectedOption(value)}
      onChange={onChange}
      onInputChange={onInputChange}
      options={options.map(v => toOption(v, isMulti ? value : undefined))}
      ref={innerRef}
      {...rest}
    />
  );
};

export default CreatableSelect;
