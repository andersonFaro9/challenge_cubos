import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  text-align: center;
  max-width: 960px;
  margin: 0 auto;
`;

export const Info = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #ebebeb;
  margin: 0 4.4rem;
  width: 96rem;

  div.details {
    padding-top: 2rem;
    color: #45d9db;
    font-size: 3.6rem;
    background-color: #116193;
    text-align: left;
    width: 78rem;
    height: 7rem;
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
    padding-top: 0.3rem;
  }

  div.date {
    font-size: 2.1rem;
    color: #afafaf;
    padding-top: 0.4rem;
    padding-left: 11rem;
  }
  div.sinopse {
    text-align: left;
    line-height: 1.1em;
    font-size: 1.8rem;
    width: auto;
    padding-right: 1rem;
    padding-top: 3rem;
    padding-left: 1.5rem;
    font-weight: 600;
    font-family: Abel, Lato, Arial, Helvetica, sans-serif;
    color: #8c8c8c;
  }
  @media (max-width: 863px) {
    div.sinopse {
      padding-top: 2rem;
      font-size: 1.8rem;
      line-height: 1em;
    }
  }

  @media (max-width: 949px) {
    width: 90rem;
  }

  @media (max-width: 896px) {
    width: 87rem;
  }
  @media (max-width: 869px) {
    width: 75rem;
  }
  @media (max-width: 751px) {
    width: 70rem;
  }
  @media (max-width: 661px) {
    width: 68rem;
  }
  @media (max-width: 632px) {
    width: 65rem;
  }
`;

export const Genry = styled.div`
  ul.genres {
    flex-direction: row;
    display: flex;
    align-content: flex-start;
    justify-content: flex-start;
    margin-top: 2rem;

    li {
      list-style: none;

      margin-left: 0.9rem;
      border: 2px solid #b0c8d6;
      border-radius: 35px;
      width: 7rem;
      height: 2.9rem;
      background-color: white;
      p {
        font-size: 15px;
        color: #116193;
        font-weight: 600;
        text-align: center;
      }
    }

    @media (max-width: 863px) {
      li {
        margin-bottom: 1rem;
      }
    }
  }
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  margin-top: 4rem;
  input {
    height: 5rem;
    width: 96rem;
    padding: 0 2.4rem;
    margin: 0 4.4rem;
    margin-bottom: 4rem;

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

  @media (max-width: 949px) {
    input {
      width: 90rem;
    }
  }

  @media (max-width: 924px) {
    input {
      width: 91rem;
    }
  }

  @media (max-width: 903px) {
    input {
      width: 87rem;
    }
  }

  @media (max-width: 869px) {
    input {
      width: 75rem;
    }
  }
  @media (max-width: 757px) {
    input {
      width: 70rem;
    }
  }

  @media (max-width: 661px) {
    input {
      width: 68rem;
    }
  }
  @media (max-width: 647px) {
    input {
      width: 68rem;
    }
  }
  @media (max-width: 641px) {
    input {
      width: 68rem;
    }
  }
  @media (max-width: 632px) {
    input {
      width: 65rem;
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

  @media (max-width: 914px) {
    margin-left: 3rem;
    margin-top: 2rem;
  }

  @media (max-width: 888px) {
    margin-left: 3rem;
    margin-top: 2rem;
  }

  @media (max-width: 879px) {
    margin-left: 7rem;
    margin-top: 2rem;
  }

  @media (max-width: 867px) {
    margin-left: 7rem;
    margin-top: 4rem;
  }
  @media (max-width: 846px) {
    margin-left: 7rem;
    margin-top: 4rem;
  }
  @media (max-width: 822px) {
    margin-left: 7rem;
    margin-top: 4rem;
  }
  @media (max-width: 644px) {
    margin-left: 10rem;
    margin-top: 4rem;
  }
`;
