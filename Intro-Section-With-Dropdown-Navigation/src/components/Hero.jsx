import styled from 'styled-components/macro';
import { Content } from '.';
import heroDesktop from '../images/image-hero-desktop.png';
import heroMobile from '../images/image-hero-mobile.png';
import { minWidth } from '../utils';

const Hero = () => {
  return (
    <HeroWrapper>
      <div className='img-container'>
        <picture>
          <source media='(min-width:750px)' srcSet={heroDesktop} />
          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
          <img src={heroMobile} alt='hero image' />
        </picture>
      </div>
      <Content />
    </HeroWrapper>
  );
};

const HeroWrapper = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media ${minWidth} {
    flex-direction: row-reverse;
    align-items: stretch;

    .img-container {
      height: 100%;
    }
  }
`;

export default Hero;
