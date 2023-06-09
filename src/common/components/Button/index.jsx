import React from "react";
import {
  Button as StyledButton
} from "./style";

const ButtonComponent = ({ Text, onClick, Type = "button" }) => {
  return (
    <StyledButton type={Type} onClick={onClick}>
      {Text}
    </StyledButton>
  );
};

export default ButtonComponent;


