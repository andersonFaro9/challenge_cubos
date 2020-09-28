import styled from 'styled-components';

export const Movies = styled.div`
  flex: 1;
  max-width: 100%;
  height: 100%;
  display: flex;

  background: blue;
  padding: 0 14rem;
`;

export const Images = styled.div`
  justify-content: flex-start;
  align-items: center;

  img {
    border-radius: 3%;
  }
`;

export const Texts = styled.div`
  .original_title {
    padding-top: 5rem;
    padding-left: 1rem;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    word-spacing: 5px;
    font-size: 2.2rem;
    color: whitesmoke;
  }
  .original_title > span {
    color: whitesmoke;
    opacity: 0.8;
    word-spacing: 6px;
    padding-left: 11px;
    font-weight: 400;
  }

  .vote_average {
    flex: 1;

    font-size: 15px;
    color: whitesmoke;
    width: 70px;
    height: 64px;
    text-align: center;
    font-size: 25px;
    margin-left: 1rem;
    padding-top: 1rem;
    border-radius: 50%;

    border: 4px solid #24d17a;
  }

  .teste {
    color: whitesmoke;
    font-size: 1.2rem;

    padding-top: 1rem;
    padding-left: 1rem;
  }
  h2 {
    margin-left: 1rem;
    margin-top: 12px;
    color: whitesmoke;
  }

  .overview {
    text-align: justify;
    font-size: 16px;

    color: whitesmoke;
    margin-left: 1rem;
    padding-top: 1rem;
  }
`;
