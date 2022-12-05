import styled from 'styled-components/macro';
import { mediaDesktop } from '../css-values';
import { FrontCard, BackCard } from '.';

const CardContainer = ({ card }) => {
  return (
    <CardContainerWrapper>
      <BackCard {...card} />
      <FrontCard {...card} />
    </CardContainerWrapper>
  );
};

/** ******************
 * STYLE-COMPONENTS
 ** ******************/
const CardContainerWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 500px;

  @media (${mediaDesktop}) {
    height: 330px;
  }
`;

export default CardContainer;
