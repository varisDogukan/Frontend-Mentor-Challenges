import styled from 'styled-components/macro';
import Chart from './Chart';
import data from '../data.json';

const ContentChartContainer = () => {
  const date = new Date();
  const check = date.toDateString().split(' ')[0];

  return (
    <ContentChartContainerWrapper data={data}>
      {data.map((item, idx) => (
        <Chart key={idx} {...item} check={check} />
      ))}
    </ContentChartContainerWrapper>
  );
};

const ContentChartContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default ContentChartContainer;
