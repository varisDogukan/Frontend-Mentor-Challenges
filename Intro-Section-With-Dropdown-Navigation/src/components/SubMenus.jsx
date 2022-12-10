import styled from 'styled-components/macro';
import { minWidth } from '../utils';
import SubMenuItem from './SubMenuItem';

const SubMenus = ({ subMenu }) => {
  return (
    <SubMenusWrapper>
      {subMenu.map((item) => (
        <SubMenuItem key={item.id} {...item} />
      ))}
    </SubMenusWrapper>
  );
};

const SubMenusWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 20px;
  margin: 40px 0px 20px;

  @media ${minWidth} {
    position: absolute;
    top: 40px;
    right: 0;
    background: var(--white);
    padding: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    margin: 0px;
  }
`;

export default SubMenus;
