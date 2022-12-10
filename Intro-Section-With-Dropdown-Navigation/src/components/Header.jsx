import { useState } from 'react';
import styled from 'styled-components/macro';
import { Logo, Navbar } from '.';
import menuIcon from '../images/icon-menu.svg';
import closeIcon from '../images/icon-close-menu.svg';
import { minWidth } from '../utils';

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const showMenu = (value) => {
    setIsShowMenu(value);
  };

  return (
    <HeaderWrapper isShowMenu={isShowMenu}>
      <Logo />
      <Navbar isShowMenu={isShowMenu} />

      <div className='float-icon'>
        {isShowMenu ? (
          <img
            src={closeIcon}
            alt='menu close icon'
            onClick={() => showMenu(!isShowMenu)}
          />
        ) : (
          <img
            src={menuIcon}
            alt='menu icon'
            onClick={() => showMenu(!isShowMenu)}
          />
        )}
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  gap: 50px;
  justify-content: space-between;
  padding: 20px;

  .float-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: ${(props) => (props.isShowMenu ? 'fixed' : 'relative')};
    right: ${(props) => (props.isShowMenu ? '20px' : '0px')};
    z-index: 10;
  }

  @media ${minWidth} {
    .float-icon {
      display: none;
    }
  }
`;

export default Header;
