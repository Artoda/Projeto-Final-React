import React from "react";
import {
  Input as StyledInput
} from "./style";

const InputComponent = ({ type, placeholder, value, onChange }) => {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default InputComponent;

