import styled from 'styled-components/macro';
import { Attribution, Header, Content } from './components';

function App() {
  return (
    <Wrapper>
      <Header />
      <Content />
      <Attribution />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  gap: 15px;

  background: var(--cream);
  padding: 10px;
`;

export default App;
