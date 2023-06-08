import styled from "styled-components";

export const Container = styled.div`
  /* border: 2px solid red; */
  margin: 0;
  padding: 10px;
  box-sizing: border-box;
  font-family: Inter, sans-serif;

  font-size: 16px;

  color: #737070;
  background-color: #F8F8F8;
  height: 100vh;
`;

export const BoxContainer = styled.div`
    background: white;
    max-width: 400px;
    margin: 100px auto 0px;
    padding-bottom: 20px;
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 50px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;

`;

export const EmailContainer = styled.div`
    text-align: left;
    width: 100%;
        input {
        width: 98%;
        background: white;
        border-radius: 5px;
        border: 1px solid #737070;
        height: 30px;
        }
`;
export const PasswordContainer = styled.div`
    text-align: left;
    width: 100%;
        input {
        width: 98%;
        background: white;
        border-radius: 5px;
        border: 1px solid #737070;
        height: 30px;
        }
`;
export const PasswordInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginBt = styled.button`
    list-style: none;
    background: rgba(203, 18, 28, 0.7);
    color:white;
    border-radius: 5px;
    margin:10px;
    width: 100%;
    height: 35px;

    padding: 0px;
    margin: 20px;
`;
export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 12px;
    span {
      span {
        color:red;
      }
    }
`;







// export const SearchContainer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   position: relative;

//   img {
//     position: absolute;
//     width: 25px;
//     right: 10px;
//   }
// `;

/*

  img {
    padding: 10px;
  }
  background-color: #ffffff;
  width: 100%;
`;
/*
export const ContentContainer = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: start;

  width: 100%;
  padding: 0 0 0 70px;
  a {
    height: 100%;
  }
`;

export const EmailContainer = styled.li`
  display: flex;
  align-items: center;
  font-size: 20px;
  height: 100%;
  padding-bottom: 12px;
  border-bottom: ${(props) => (props.isActive ? "3px solid red" : "none")};
  gap: 50px;
  color: black;
`;

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const LoginButtom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e9e9e9;
  padding: 20px;
  height: 400px;
  border-radius: 5%;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;

  img {
    width: 200px;
  }
`;

export const ProductTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const ShopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  width: 100%;
`;
*/