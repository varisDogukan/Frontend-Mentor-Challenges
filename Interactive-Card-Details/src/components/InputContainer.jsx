import styled from 'styled-components/macro';
import { InputGroup, InputLabel } from '.';

const InputContainer = ({
  card: { name, number, month, year, cvc },
  errors,
  handleChange,
  handleSubmit,
}) => {
  return (
    <InputContainerWrapper onSubmit={handleSubmit}>
      <InputGroup
        label='true'
        id='name'
        name='name'
        title='cardholder name'
        placeholder='e.g. Jane Appleseed'
        value={name}
        onChange={handleChange}
        error={errors.name || ''}
      />
      <InputGroup
        label='true'
        id='number'
        name='number'
        title='card number'
        placeholder='e.g. 1234 5678 9123 0000'
        value={number}
        onChange={handleChange}
        error={errors.number || ''}
      />
      <div className='second-group'>
        <div className='second-group-sub'>
          <InputLabel title='exp. date (mm/yy)' />
          <div className='sub-group'>
            <InputGroup
              id='date'
              name='month'
              placeholder='MM'
              value={month}
              onChange={handleChange}
              maxLength={2}
              error={errors.month || ''}
            />
            <InputGroup
              id='date'
              name='year'
              placeholder='YY'
              value={year}
              onChange={handleChange}
              maxLength={2}
              error={errors.year || ''}
            />
          </div>
        </div>
        <InputGroup
          label='true'
          id='cvc'
          title='cvc'
          name='cvc'
          placeholder='e.g. 123'
          secret='true'
          value={cvc}
          onChange={handleChange}
          maxLength={3}
          error={errors.cvc || ''}
        />
      </div>
    </InputContainerWrapper>
  );
};

/** ******************
 * STYLE-COMPONENTS
 ** ******************/
const InputContainerWrapper = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;

  .second-group {
    display: flex;
    gap: 10px;

    .second-group-sub {
      display: flex;
      flex-direction: column;
    }

    .sub-group {
      display: flex;
      gap: 10px;
    }
  }
`;

export default InputContainer;
