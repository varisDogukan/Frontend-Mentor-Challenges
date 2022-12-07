import styled from 'styled-components/macro';
import { ContentTitle, ContentChartContainer, ContentFooter } from '.';

const Content = () => {
  return (
    <ContentWrapper>
      <ContentTitle />
      <ContentChartContainer />
      <ContentFooter />
    </ContentWrapper>
  );
};

const ContentWrapper = styled.section`
  width: 100%;
  max-width: 320px;
  padding: 10px;
  background: var(--very-pale-orange);

  border-radius: 10px;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export default Content;
