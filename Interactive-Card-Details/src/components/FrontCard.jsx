import styled from 'styled-components/macro';
import { mediaDesktop, mediaDesktop2 } from '../css-values';
import cardFront from '../images/bg-card-front.png';

const FrontCard = ({ number, month, year, name }) => {
  return (
    <FrondCardWrapper cardFront={cardFront}>
      <div className='circle'></div>
      <div className='card-number__container'>
        {number || '0000 0000 0000 0000'}
      </div>
      <div className='container'>
        <p className='name'>{name || 'Jane Appleseed'}</p>
        <p className='date'>
          {month || '00'}/{year || '00'}
        </p>
      </div>
    </FrondCardWrapper>
  );
};

/** ******************
 * STYLE-COMPONENTS
 ** ******************/
const FrondCardWrapper = styled.div`
  width: 250px;
  height: 150px;
  position: absolute;
  border-radius: 5px;
  background: ${(props) =>
    `url(${props.cardFront}) no-repeat center center/cover`};
  bottom: -30px;
  left: 20px;
  padding: 15px;
  color: var(--white);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: var(--shadow);

  .circle {
    position: relative;
    background-color: var(--white);
    width: 30px;
    height: 30px;
    border-radius: 50%;

    &::after {
      position: absolute;
      content: '';
      width: 15px;
      height: 15px;
      border-radius: inherit;
      background-color: transparent;
      border: 1px solid var(--white);
      top: 50%;
      left: 40px;

      transform: translateY(-50%);
    }
  }

  .card-number__container {
    display: flex;
    gap: 10px;
    margin-top: auto;
    margin-bottom: 20px;
  }

  .container {
    display: flex;
    justify-content: space-between;
    font-size: 12px;

    .name {
      text-transform: uppercase;
    }
  }

  @media (${mediaDesktop}) {
    top: 0;
    left: 60px;
  }

  @media (${mediaDesktop2}) {
    top: 0;
    left: 30%;
  }
`;

export default FrontCard;
