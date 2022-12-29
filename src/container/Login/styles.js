import styled from "styled-components";


export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;



export const ContainerItens = styled.div`
  background: #373737;
  height: 70%;
  padding: 25px 75px;

  display: flex;
  justify-content: center;
  flex-direction: column;


  h1 {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    text-align: center;
    margin-top: 100px;
  }
  form{
    display: flex;
    flex-direction:column;
  }
`;

export const Label = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  margin-top: 20px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 391.42px;
  height: 38.32px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: ${props => props.error ? "2px solid #cc1717": "none"};
  padding-left: 20px;
`;

export const Button = styled.button`
  width: 182.81px;
  height: 36.13px;

  background: #9758a6;
  border-radius: 20px;
  border: 0;

  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #eeeeee;
  margin-top: 75px;
  margin-bottom: 25px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const SingInLink = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;

  a {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-decoration-line: underline;
    color: #ffffff;
    cursor: pointer;
  }
`;

export const ErrorMensagem = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #cc1717;
  margin-top: 2.9px;
`
