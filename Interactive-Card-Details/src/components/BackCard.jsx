import styled from 'styled-components/macro';
import { mediaDesktop, mediaDesktop2 } from '../css-values';
import cardBack from '../images/bg-card-back.png';

const BackCard = ({ cvc }) => {
  return (
    <BackCardWrapper cardBack={cardBack}>
      <div className='float-number'>{cvc || '000'}</div>
    </BackCardWrapper>
  );
};

/** ******************
 * STYLE-COMPONENTS
 ** ******************/
const BackCardWrapper = styled.div`
  width: 250px;
  height: 150px;
  position: absolute;
  border-radius: 5px;
  box-shadow: var(--shadow);

  background: ${(props) =>
    `url(${props.cardBack}) no-repeat center center/cover`};
  top: 30px;
  right: 20px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;

  .float-number {
    font-size: 12px;
    color: var(--white);
  }

  @media (${mediaDesktop}) {
    top: 170px;
    left: 90px;
  }

  @media (${mediaDesktop2}) {
    top: 170px;
    left: 150px;
  }
`;

export default BackCard;
