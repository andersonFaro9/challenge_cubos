import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;
`;

export const Form = styled.div`
  input {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    width: 95%;
    max-width: 100%;

    margin: 4rem;
    padding: 0 2.4rem;

    font-size: 16px;
    border: 0;
    border-right: 0;
    background-color: #e6e6e6;
    border-radius: 3.2rem;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    &::placeholder {
      color: #baccd7;
      padding: 1.5rem;
      font-size: 1.8rem;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 4rem;
  width: 95%;

  max-width: 100%;

  div.details {
    color: #45d9db;
    font-size: 3.6rem;
    background-color: #116193;
    text-align: left;

    height: 7rem;
  }

  p.no-info {
    font-size: 3rem;
    font-weight: 600;
    padding-left: 3rem;
    color: #afafaf;
  }

  a {
    text-decoration: none;
    margin-top: 2rem;
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
  div.value {
    background-color: #116193;
    border-style: solid;
    margin-top: 0.1rem;
    border-radius: 50%;

    padding-top: 1.5rem;

    border-width: 0.6rem;

    width: 7.2rem;
    height: 6.9rem;
  }

  div.title {
    padding-left: 11rem;
    padding-top: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  div.date {
    padding-top: 1rem;
    font-size: 2.1rem;
    color: #afafaf;
    padding-left: 11rem;
  }
  div.sinopse {
    padding-top: 1rem;
    text-align: left;
    font-size: 2rem;
    padding-right: 1rem;
    padding-left: 1.5rem;
    font-weight: 600;
    font-family: Abel, Lato, Arial, Helvetica, sans-serif;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;

    background-color: #ebebeb;
    color: #8c8c8c;
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
  p.no-genre {
    padding-top: 1rem;
    padding-left: 3rem;
    font-weight: 600;
    font-size: 3rem;
    color: #afafaf;
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
    font-weight: 600;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    /* -webkit-line-clamp: 4; */
    -webkit-box-orient: vertical;
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
