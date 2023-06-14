import styled from "styled-components";

export const Button = styled.button`
  background: var(--bg-button);
  font-size: 16px;
  list-style: none;
  color: var(--terciary-color);
  border: none;
  border-radius: 5px;
  margin: 10px;
  margin: 10px 0;
  cursor: pointer;
  transition-duration: 0.2s;
  padding: 10px;
  width: 238px;

  :hover {
    background-color: var(--terciary-color);
    color: var(--alert-color);
    border: 1px solid var(--alert-color);
  }
`;
