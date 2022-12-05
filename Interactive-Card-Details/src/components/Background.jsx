import styled from 'styled-components/macro';
import { mediaDesktop } from '../css-values';
import bgMainMobile from '../images/bg-main-mobile.png';
import bgMainDesktop from '../images/bg-main-desktop.png';
import CardContainer from './CardContainer';

const Background = ({ card }) => {
  return (
    <BackgroundWrapper
      bgMainMobile={bgMainMobile}
      bgMainDesktop={bgMainDesktop}
    >
      <CardContainer card={card} />
    </BackgroundWrapper>
  );
};

/** ******************
 * STYLE-COMPONENTS
 ** ******************/
const BackgroundWrapper = styled.div`
  background: ${(props) =>
    `url(${props.bgMainMobile}) no-repeat center center/cover`};
  height: 240px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (${mediaDesktop}) {
    background: ${(props) =>
      `url(${props.bgMainDesktop}) no-repeat center center/cover`};
    min-height: 100%;
  }
`;

export default Background;
