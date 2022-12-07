import styled from 'styled-components/macro';
import logo from '../images/logo.svg';

const Header = () => {
  return (
    <HeaderWrapper>
      <div>
        <p className='header__title'>My balance</p>
        <p className='header__price'>$921.48</p>
      </div>

      <img src={logo} alt='' className='logo' />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: 100%;
  max-width: 320px;

  background: var(--soft-red);
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;

  color: var(--very-pale-orange);

  .header__price {
    font-weight: 700;
    font-size: 18px;
  }

  img {
    width: 50px;
    height: 50px;
  }
`;

export default Header;
