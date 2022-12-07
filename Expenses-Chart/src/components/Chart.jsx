import styled from 'styled-components/macro';

const Chart = ({ day, amount, check }) => {
  return (
    <ChartWrapper amount={amount} check={check} day={day}>
      <div className='chart'>
        <div className='tooltip'>{amount}</div>
      </div>
      <p className='day'>{day}</p>
    </ChartWrapper>
  );
};

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 10px;
  text-align: center;

  gap: 10px;
  padding-top: 10px;

  .chart {
    background: ${(props) =>
      props.check.toLowerCase() === props.day
        ? 'var(--cyan)'
        : 'var(--soft-red)'};
    width: 35px;
    height: calc(${(props) => props.amount} * 2px);
    margin-top: auto;
    border-radius: 5px;
    position: relative;
    cursor: pointer;
    transition: var(--transition-all);

    &:hover {
      filter: brightness(130%);
    }

    .tooltip {
      position: absolute;
      padding: 5px;
      width: 40px;
      top: -25px;
      left: -2.5px;
      transform: scale(0);
      background: var(--dark-brown);
      transition: var(--transition-all);
      color: var(--very-pale-orange);
      font-weight: 700;
      border-radius: 2.5px;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
    }

    &:hover .tooltip {
      transform: scale(1);
    }
  }

  .day {
    color: var(--medium-brown);
  }
`;

export default Chart;
