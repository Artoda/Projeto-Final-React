import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  gap: 3px;
  span {
    font-size: 30px;
    color:  rgba(203, 18, 28, 0.7);
  }
  .alert {
    color:  rgba(203, 18, 28, 0.9);
  }
`;

export const LogoIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  
  span{
    width: 11px;
    height: 32px;
  }
  .square1{
    background-color: rgba(203, 18, 28, 1);
  }
  .square2{
    background-color: rgba(203, 18, 28, 0.7);
  }
  .square3{
    background-color: rgba(203, 18, 28, 0.4);
  }
`;
