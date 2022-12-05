import styled from "styled-components/macro";

const Button = ({ type, text }) => {
  return <ButtonWrapper type={type}>{text}</ButtonWrapper>;
};


/** ******************
 * STYLE-COMPONENTS
 ** ******************/
const ButtonWrapper = styled.button`
  background-color: var(--very-dark-violet);
  color: var(--white);
  padding: 8px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: 800;
`;

export default Button;
