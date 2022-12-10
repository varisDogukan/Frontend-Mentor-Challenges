import styled from 'styled-components/macro';
import { testimonials } from '../utils';

const Testimonials = () => {
  return (
    <TestimonialsWrapper>
      {testimonials.map((item) => (
        <div key={item.id}>
          <img src={item.logo} alt='logo' />
        </div>
      ))}
    </TestimonialsWrapper>
  );
};

const TestimonialsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(50px, 1fr));
  gap: 20px;
  width: 100%;
  justify-items: space-between;
  align-items: center;
  margin-top: auto;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default Testimonials;
