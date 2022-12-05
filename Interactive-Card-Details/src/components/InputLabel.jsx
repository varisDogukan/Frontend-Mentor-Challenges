import styled from 'styled-components/macro';

const InputLabel = ({ id, title }) => {
  return <Label htmlFor={id}>{title}</Label>;
};

/** ******************
 * STYLE-COMPONENTS
 ** ******************/
const Label = styled.label`
  font-size: 13px;
  text-transform: uppercase;
  color: var(--very-dark-violet);
  margin-bottom: 5px;
`;

export default InputLabel;
