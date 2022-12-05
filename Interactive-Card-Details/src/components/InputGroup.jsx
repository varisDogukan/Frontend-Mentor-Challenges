import styled from 'styled-components/macro';
import InputLabel from './InputLabel';

const InputGroup = (props) => {
  return (
    <GroupWrapper error={props.error}>
      {props.label && <InputLabel {...props} />}
      <input type='text' {...props} />
      {props.error?.length > 0 && <p className='error'>{props.error}</p>}
    </GroupWrapper>
  );
};

/** ******************
 * STYLE-COMPONENTS
 ** ******************/
const GroupWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    border-color: ${(props) => props.error && 'var(--input-error)'};

    &::placeholder {
      color: var(--light-grayish-violet);
    }
  }

  .error {
    font-size: 10px;
    color: var(--input-error);
  }
`;

export default InputGroup;
