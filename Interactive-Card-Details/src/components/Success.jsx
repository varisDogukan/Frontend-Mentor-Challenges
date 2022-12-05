import styled from 'styled-components/macro';
import completeIcon from '../images/icon-complete.svg';

const Success = () => {
  return (
    <SuccessWrapper>
      <img src={completeIcon} alt='complete icon' />
      <h2 className='title'>THANK YOU!</h2>
      <p className='text'>We've added your card details</p>
    </SuccessWrapper>
  );
};

const SuccessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  .title {
    color: var(--very-dark-violet);
    letter-spacing: 5px;
    font-weight: 300;
  }

  .text {
    margin-bottom: 20px;
    color: var(--dark-grayish-violet);
  }
`;

export default Success;
