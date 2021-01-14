import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  div.error {
    line-height: 2rem;
    color: #1e6093;
    font-size: 2rem;
  }
`;

export const Form = styled.div`
  input {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 5rem;
    width: 95%;
    margin: 4rem auto;

    max-width: 100%;

    padding: 0 1.5rem;

    font-size: 2rem;
    background-color: #e6e6e6;
    border-radius: 3.2rem;
    color: #3a3a3a;
    border: 2px solid #fff;

    &::placeholder {
      color: #116193;
      opacity: 0.4;

      font-weight: 100;

      font-size: 1.8rem;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  max-width: 100%;
  margin: 1rem auto;

  div.details {
    color: #45d9db;
    font-size: 3.6rem;
    background-color: #116193;
    text-align: left;
    width: 95%;
    height: 7rem;
  }

  p.no-info {
    display: flex;
    padding-left: 3rem;
    color: #8c8c8c;
    font-size: 3rem;
    padding-top: 2rem;
  }

  @media (max-width: 768px) {
    p.no-info {
      padding-top: 3rem;
      padding-left: 3rem;
    }
  }

  @media (max-width: 1440px) {
    p.no-info {
      padding-top: 2rem;
      font-size: 2rem;
      padding-left: 3rem;
    }
  }

  a {
    text-decoration: none;
    margin-top: 1rem;
    margin-bottom: 4rem;
    display: flex;
    background-color: #ebebeb;
  }

  div.percentage {
    position: absolute;
    border-color: #116193;
    border-style: solid;
    padding-top: 1.5rem;
    font-size: 2.6rem;
    margin-left: 1.1rem;

    text-align: center;
    border-radius: 45%;
    height: 7rem;
    border-style: solid;
    border-width: 5px;
    width: 8.2rem;
    height: 9.4rem;
    background-color: #116193;
  }
  p.value {
    background-color: #116193;
    border-style: solid;
    margin-top: 0.1rem;
    border-radius: 50%;

    padding-top: 1.5rem;

    border-width: 0.6rem;

    width: 7.2rem;
    height: 6.9rem;
  }
  @media (max-width: 768px) {
    p.value {
      width: 7.3rem;
      font-size: 2rem;
      height: 7rem;
    }
  }

  @media (max-width: 1440px) {
    p.value {
      width: 7.3rem;
      font-size: 2rem;
      height: 7rem;
    }
  }

  p.title {
    padding-left: 11rem;
    padding-top: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  p.date {
    padding-top: 1rem;
    font-size: 2.1rem;
    color: #afafaf;
    padding-left: 11rem;
  }
  p.overview {
    padding-top: 1rem;
    text-align: left;
    font-size: 2rem;
    padding-right: 1rem;
    padding-left: 1.5rem;
    width: 100%;
    font-family: Abel, Lato, Arial, Helvetica, sans-serif;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    background-color: #ebebeb;
    color: #2b2a2ad4;
  }

  @media (max-width: 425px) {
    p.overview {
      -webkit-line-clamp: 1;
    }
  }
  @media (max-width: 375px) {
    p.overview {
      -webkit-line-clamp: 2;
    }
  }
  @media (max-width: 320px) {
    p.overview {
      -webkit-line-clamp: 1;
    }
  }
  .poster {
    max-height: 30%;
    max-width: 30%;
    flex-grow: 1;
  }
`;

export const Genry = styled.div`
  ul.genres {
    flex-direction: row;
    display: flex;
    align-content: flex-start;
    justify-content: flex-start;
    margin-top: 2rem;
  }

  @media (max-width: 762px) {
    ul.genres {
      flex-direction: column;
    }
  }

  p.no-genre {
    display: flex;
    padding-top: 1rem;
    font-size: 3rem;
    padding-left: 3rem;
    color: #8c8c8c;
  }
  @media (max-width: 375px) {
    p.no-genre {
      font-size: 2rem;
      padding-left: 3rem;
      display: none;
    }
  }
  @media (max-width: 1440px) {
    p.no-genre {
      padding-top: 1rem;
      font-size: 2rem;
      padding-left: 3rem;
    }
  }
  li {
    list-style: none;

    border: 2px solid #b0c8d6;
    border-radius: 35px;
    width: 9rem;
    margin-left: 0.9rem;
    height: 2.9rem;
    background-color: white;
    font-size: 15px;
    color: #116193;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  @media (max-width: 425px) {
    li {
      display: none;
    }
  }

  @media (max-width: 863px) {
    li {
      margin-bottom: 1rem;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div.button-pages {
    color: #45d9db;
    padding-top: 0.7rem;
    padding-left: 0.4rem;
    font-size: 2.6rem;

    text-align: center;
    border-radius: 50%;
    width: 5.9rem;
    height: 5.7rem;
    border-style: solid;
    border-width: 4px;
    border-color: #116193;
    background-color: #116193;
  }
  div.button-pages > button {
    color: #45d9db;
    margin-top: -3rem;
    margin-left: -0.5rem;
    font-size: 2.6rem;

    text-align: center;
    border-radius: 50%;
    width: 5.3rem;
    height: 5rem;
    border-style: solid;
    border-width: 4px;
    border-color: #45d9db;
    background-color: #116193;
  }
`;
