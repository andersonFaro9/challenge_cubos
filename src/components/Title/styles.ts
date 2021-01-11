import styled from 'styled-components';

export const TitleSearch = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  /* margin-top: 4rem; */
  padding-top: 2rem;
  margin-left: 4rem;
  color: #116193;
  font-weight: 550;
  font-size: 3.4rem;
  height: 6rem;
`;

// A new component based on Button, but with some override styles
export const TitleDetall = styled(TitleSearch)`
  color: #116193;
  font-size: 3.6rem;
  background-color: #116193;
`;

// const Container1 = styled.div`
//   p.title {
//     position: absolute;
//     display: flex;
//     align-items: flex-start;
//     justify-content: flex-start;
//     margin-top: 4rem;
//     padding-top: 2rem;
//     margin-left: 4rem;
//     color: #116193;
//     font-weight: 550;
//     font-size: 3.4rem;
//     height: 6rem;
//   }
// `;
