import styled from 'styled-components/macro';

const Attribution = () => {
  return (
    <AttributionWrapper>
      Challenge by{' '}
      <a
        href='https://www.frontendmentor.io?ref=challenge'
        target='_blank'
        rel='noreferrer'
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a href='https://github.com/do-Va' target='_blank' rel='noreferrer'>
        doVa
      </a>
      .
    </AttributionWrapper>
  );
};

const AttributionWrapper = styled.footer`
  color: var(--medium-brown);
  font-size: 12px;

  a {
    color: var(--dark-brown);
  }
`;

export default Attribution;
