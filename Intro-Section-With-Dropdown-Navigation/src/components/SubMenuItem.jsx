import styled from 'styled-components/macro';

const SubMenuItem = ({ logo, name }) => {
  return (
    <SubMenuItemWrapper>
      {logo && <img src={logo} alt={name} />}
      <p>{name}</p>
    </SubMenuItemWrapper>
  );
};

const SubMenuItemWrapper = styled.nav`
  text-transform: capitalize;
  display: flex;
  align-items: center;
  gap: 20px;
  width: max-content;
  cursor: pointer;

  p {
    transition: all 0.2s linear;
  }

  &:hover > * {
    color: var(--almost-black);
  }

  img {
    width: 20px;
  }
`;

export default SubMenuItem;
