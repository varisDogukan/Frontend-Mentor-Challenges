import styled from 'styled-components/macro';

const ContentFooter = () => {
  return (
    <ContentFooterWrapper>
      <p className='title'>Total this Month</p>
      <div className='sub-container'>
        <p className='price dark'>$478.33</p>
        <div className='right'>
          <p className='percantage dark'>+2.4%</p>
          <p className='title'>from last month</p>
        </div>
      </div>
    </ContentFooterWrapper>
  );
};

const ContentFooterWrapper = styled.footer`
  padding: 20px 0;
  border-top: 1px solid var(--cream);

  .title {
    color: var(--medium-brown);
  }

  .dark {
    color: var(--dark-brown);
    font-weight: 700;
  }

  .price {
    font-size: 30px;
  }

  .sub-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }
`;

export default ContentFooter;
