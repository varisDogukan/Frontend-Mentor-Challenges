import styled from 'styled-components/macro';
import { Menus, Button } from '.';
import { minWidth } from '../utils';

const Navbar = ({ isShowMenu }) => {
  return (
    <NavbarWrapper isShowMenu={isShowMenu}>
      <div className='nav-container'>
        <Menus />

        <div className='button-container'>
          <Button children='Login' />
          <Button children='Register' type='bordered' />
        </div>
      </div>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.nav`
  position: fixed;
  background: var(--almost-black-opacity);
  inset: 0;
  transition: all 0.2s linear;
  transform: ${(props) =>
    props.isShowMenu ? 'translate(0)' : 'translate(100%)'};
  opacity: ${(props) => (props.isShowMenu ? '1' : '0')};
  backdrop-filter: blur(4px);

  & > * {
    color: var(--medium-gray);
  }

  .nav-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    width: 60%;
    height: 100%;
    margin-left: auto;
    background: var(--white);
    padding: 80px 20px;

    .button-container {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
    }
  }

  @media ${minWidth} {
    transform: translate(0);
    opacity: 1;
    background: transparent;
    backdrop-filter: none;
    position: static;
    width: 100%;

    .nav-container {
      flex: 1;
      flex-direction: row;
      justify-content: space-between;
      background: transparent;
      gap: 0px;
      width: 100%;
      padding: 0;

      .button-container {
        flex-direction: row;
        width: max-content;
      }
    }
  }
`;

export default Navbar;
