import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 18px;
  color: white;
  background-color: #000000;
  border-radius: 8px;
  width: 220px;
  cursor: pointer;
  border: none;
  font-size: 20px;
  border: 1px solid transparent;//taki upar neeche na ho
  transition: 0.5s background-color ease-in-out;
  
  &:hover{
    background-color: white;
    transition: 0.5s background-color ease-in-out transform;
    transform: scale(1.1);
    border: 1px solid black;
    color: black;
  }
`;

export const OutlineButton = styled(Button)`
  
  background-color: white;
  border: 1px solid black;
  color: black;

  &:hover{
    background-color: black;
    transition: 0.5s background-color ease-in-out transform;
    transform: scale(1.1);
    color: white;
  }
`;

