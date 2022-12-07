import styled from 'styled-components/macro';

const ContentTitle = () => {
  return <ContentTitleWrapper>Spending - Last 7 days</ContentTitleWrapper>;
};

const ContentTitleWrapper = styled.h5`
  font-weight: 700;
  font-size: 18px;
`;

export default ContentTitle;
