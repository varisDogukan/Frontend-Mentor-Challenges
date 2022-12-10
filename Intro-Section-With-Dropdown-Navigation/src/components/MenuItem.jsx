import { useState } from 'react';
import styled from 'styled-components/macro';
import SubMenus from './SubMenus';
import arrow from '../images/icon-arrow-down.svg';
import { minWidth } from '../utils';

const MenuItem = ({ name, haveSub, subMenu }) => {
  const [isShowDropMenu, setIsShowDropMenu] = useState(false);

  const showDropMenu = (value) => {
    setIsShowDropMenu(value);
  };

  return (
    <MenuItemWrapper isShowDropMenu={isShowDropMenu}>
      <div className='container' onClick={() => showDropMenu(!isShowDropMenu)}>
        <p>{name}</p>
        {haveSub && <img src={arrow} alt='' className='arrow' />}
      </div>
      {haveSub && isShowDropMenu && <SubMenus subMenu={subMenu} />}
    </MenuItemWrapper>
  );
};

const MenuItemWrapper = styled.nav`
  text-transform: capitalize;
  position: relative;
  cursor: pointer;
  user-select: none;

  .container {
    display: flex;
    align-items: center;
    gap: 10px;

    p {
      transition: all 0.2s linear;
    }

    .arrow {
      transition: all 0.2s linear;
      transform: ${(props) => props.isShowDropMenu && 'rotate(180deg)'};
    }

    &:hover > * {
      color: var(--almost-black);
    }
  }

  @media ${minWidth} {
    .container {
    }
  }
`;

export default MenuItem;
