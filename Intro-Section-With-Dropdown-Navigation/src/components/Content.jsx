import styled from 'styled-components/macro';
import { Button, Testimonials } from '.';
import { minWidth } from '../utils';

const Content = () => {
  return (
    <ContentWrapper>
      <h2 className='title'>
        Make <span>remote work</span>
      </h2>
      <p className='text'>
        Get your team in sync. no matter your location. Streamline processes,
        create team rituals, and watch productivity soar
      </p>

      <Button children='Learn more' type='full' />
      <Testimonials />
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  gap: 40px;

  .title {
    font-size: clamp(20px, 6vw, 120px);
  }

  .text {
    font-size: clamp(13px, 2vw, 28px);
    text-align: center;
  }

  @media ${minWidth} {
    align-items: flex-start;

    .title {
      margin-top: 100px;
      span {
        display: block;
      }
    }

    .text {
      text-align: left;
      max-width: 670px;
    }
  }
`;

export default Content;
