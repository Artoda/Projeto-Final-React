import React from "react";
import {
  LogoContainer,
  LogoIcon
} from "./style";

const LogoComponent = () => {
  return (
    <LogoContainer>
      <span className="alert" >G2<span>PAWNSHOP</span></span>
      <LogoIcon>
        <span className="square1"></span>
        <span className="square2"></span>
        <span className="square3"></span>
      </LogoIcon>
    </LogoContainer>
  );
};

export default LogoComponent;


