import styled from 'styled-components';

const Container = styled.div`
  background-color: #116193;
  border-radius: 2px;
  color: #3dc0cc;
  font-size: 3.8rem;
  padding-top: 1.6rem;
  width: 106rem;
  height: 9rem;

  @media (max-width: 728px) {
    text-align: left;
    padding-left: 5rem;
  }
  @media (max-width: 1040px) {
    text-align: left;
    padding-left: 0rem;
  }
`;

export default Container;
