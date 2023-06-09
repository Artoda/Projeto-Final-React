import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid var(--primary-color);
  background: var(--bg-box);
  border-radius: 5px;
  height: 40px;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  ::placeholder {
    color: var(--primary-color);
  }
`;
