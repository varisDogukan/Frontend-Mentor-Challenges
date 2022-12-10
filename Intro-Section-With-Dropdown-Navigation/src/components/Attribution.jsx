import styled from 'styled-components/macro';

const Attribution = () => {
  return (
    <AttributionWrapper>
      Challenge by{' '}
      <a
        href='https://www.frontendmentor.io?ref=challenge'
        target='_blank'
        rel='noreferrer noopener'
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a
        href='https://github.com/do-Va'
        target='_blank'
        rel='noreferrer noopener'
      >
        doVa
      </a>
      .
    </AttributionWrapper>
  );
};

const AttributionWrapper = styled.footer`
  font-size: 11px;
  text-align: center;
  color: var(--medium-gray);
  padding: 20px;

  a {
    color: hsl(228, 45%, 44%);
  }
`;

export default Attribution;
