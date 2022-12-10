import styled from 'styled-components/macro';
import { menus, minWidth } from '../utils';
import { MenuItem } from '.';

const Menus = () => {
  return (
    <MenusWrapper>
      {menus.map((item) => {
        return <MenuItem key={item.id} {...item} />;
      })}
    </MenusWrapper>
  );
};

const MenusWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;

  @media ${minWidth} {
    flex-direction: row;
  }
`;

export default Menus;
