import React from "react";
import Creatable from "react-select/creatable";
import { InputActionMeta, ActionMeta } from "react-select/src/types";

const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    padding: "5px 10px",
    lineHeight: "26px",
    backgroundColor: state.isFocused ? "#2684FF" : "#FFF",
    color: state.isFocused ? "#FFF" : "#000"
  }),
  menu: (provided: any, state: any) => ({
    ...provided,
    position: "absolute" as const,
    top: 40,
    left: 0,
    borderRadius: 0,
    margin: 1,
    paddingTop: 0,
    paddingBottom: 0
  }),
  menuList: () => ({
    padding: 0,
    border: "1px solid #2684FF"
  }),
  container: () => ({
    height: 40,
    width: "100%",
    position: "relative" as const
  }),
  control: () => ({
    display: "flex",
    alignItems: "center",
    height: "100%",
    width: "100%",
    lineHeight: "normal",
    position: "relative" as const,
    background: "transparent",
    color: "rgba(0, 0, 0, 0.87)",
    fontFamily: "inherit",
    fontSize: "inherit",
    paddingBottom: 8,
    borderWidth: 0,
    borderBottom: "2px solid #e2e2e2"
  })
};

interface SelectProps {
  isMulti: boolean;
  name: string;
  value?: any;
  options: Array<any>;
  onChange?: (value: any, actionMeta: ActionMeta) => void;
  onInputChange?: (value: any, actionMeta: InputActionMeta) => void;
}

const isOptionDisabled = (option: any, currentValues: any) => {
  if (Array.isArray(currentValues)) {
    return currentValues.some(v => v.id === option.id);
  } else {
    return currentValues.id === option.id;
  }
};

const toOption = (data: any, currentValues?: any) => ({
  ...data,
  value: data.id,
  label: data.name,
  isDisabled: currentValues && isOptionDisabled(data, currentValues)
});

const toSelectedOption = (data: any) => {
  if (Array.isArray(data)) {
    return data.map(toOption);
  } else {
    return toOption(data);
  }
};
const Select: React.FunctionComponent<SelectProps> = props => {
  return (
    <Creatable
      styles={customStyles}
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

export default Select;
