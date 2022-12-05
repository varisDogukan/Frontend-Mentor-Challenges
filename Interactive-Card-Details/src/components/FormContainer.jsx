import styled from 'styled-components/macro';
import { Button, Success, InputContainer } from '.';

const FormContainer = ({
  card,
  errors,
  success,
  handleChange,
  handleSubmit,
}) => {
  return (
    <FormContainerWrapper onSubmit={handleSubmit}>
      {success ? (
        <Success />
      ) : (
        <InputContainer
          card={card}
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
      <Button type='submit' text={success ? 'Continue' : 'Confirm'} />
    </FormContainerWrapper>
  );
};

/** ******************
 * STYLE-COMPONENTS
 ** ******************/
const FormContainerWrapper = styled.form`
  width: 100%;
  max-width: 320px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default FormContainer;
