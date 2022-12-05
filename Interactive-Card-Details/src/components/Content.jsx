import styled from 'styled-components/macro';
import FormContainer from './FormContainer';

const Content = ({ errors, card, success, handleChange, handleSubmit }) => {
  return (
    <ContentWrapper>
      <FormContainer
        errors={errors}
        card={card}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        success={success}
      />
    </ContentWrapper>
  );
};

/** ******************
 * STYLE-COMPONENTS
 ** ******************/
const ContentWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
`;

export default Content;
