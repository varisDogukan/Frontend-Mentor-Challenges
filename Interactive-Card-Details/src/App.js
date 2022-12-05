import { useState } from 'react';
import styled from 'styled-components/macro';
import { Background, Content } from './components';
import { mediaDesktop } from './css-values';
import { cc_format, numberValid } from './utils';

function App() {
  const [card, setCard] = useState({
    name: '',
    number: '',
    month: '',
    year: '',
    cvc: '',
  });
  const [newErrors, setNewErrors] = useState({});
  const errors = {
    name: '',
    number: '',
    month: '',
    year: '',
    cvc: '',
  };

  const [success, setSuccess] = useState(false);

  const handleChange = (evn) => {
    const name = evn.target.name;
    const value = evn.target.value;
    setCard({ ...card, [name]: name === 'number' ? cc_format(value) : value });
  };

  const handleSubmit = (evn) => {
    evn.preventDefault();

    if (success) {
      setSuccess(false);
    } else {
      for (const [key, value] of Object.entries(card)) {
        if (!value) {
          errors[key] = "Can't be blank";
        } else if (key === 'number') {
          errors[key] = !numberValid(value) ? 'Wrong format, numbers only' : '';
        }
      }

      setNewErrors(errors);
      const { name, number, month, year, cvc } = errors;

      if (
        name === '' &&
        number === '' &&
        month === '' &&
        year === '' &&
        cvc === ''
      ) {
        setNewErrors({});
        setCard({
          name: '',
          number: '',
          month: '',
          year: '',
          cvc: '',
        });
        setSuccess(true);
      }
    }
  };

  return (
    <Wrapper>
      <Background card={card} />
      <Content
        card={card}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={newErrors}
        success={success}
      />
    </Wrapper>
  );
}

/** ******************
 * STYLE-COMPONENTS
 ** ******************/
const Wrapper = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;

  @media (${mediaDesktop}) {
    grid-template-columns: 300px 1fr;
  }
`;

export default App;
