import styled from 'styled-components/macro';
import { minWidth } from '../utils';

const Button = ({ children, type }) => {
  if (type === 'bordered') {
    return <BorderedButton href='#'>{children}</BorderedButton>;
  } else if (type === 'full') {
    return <FullBorderedButton href='#'>{children}</FullBorderedButton>;
  } else {
    return <ButtonWrapper href='#'>{children}</ButtonWrapper>;
  }
};

const ButtonWrapper = styled.a`
  padding: 8px 16px;
  color: var(--medium-gray);
  transition: all 0.2s linear;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${minWidth} {
    width: max-content;
  }

  &:hover {
    color: var(--almost-black);
  }
`;

const BorderedButton = styled(ButtonWrapper)`
  border: 1px solid var(--medium-gray);
  border-radius: 7px;

  &:hover {
    border-color: var(--almost-black);
  }
`;

const FullBorderedButton = styled(ButtonWrapper)`
  border: 1px solid var(--almost-black);
  border-radius: 7px;
  background: var(--almost-black);
  color: var(--almost-white);
  width: max-content;

  &:hover {
    background: var(--almost-white);
    color: var(--almost-black);
  }
`;

export default Button;
