import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
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
      color: ${props => props.theme.colors.blue1};
      opacity: 0.4;
      font-size: 1.8rem;
    }
  }
`;

export const Info = styled(Form)`
  flex-direction: column;
  width: 95%;
  margin: 1rem auto;

  div.details {
    color: ${props => props.theme.colors.green1};
    font-size: 3.6rem;
    background-color: ${props => props.theme.colors.blue1};
    text-align: left;
    width: 95%;
    height: 7rem;
  }
  @media (max-width: 425px) {
    div.details {
      width: 70%;
    }
  }
  p.no-info {
    color: ${props => props.theme.colors.gray1};
    font-size: 3rem;
    padding: 2rem 0rem 0rem 3rem;
  }

  @media (max-width: 768px) {
    p.no-info {
      padding: 3rem 0rem 0rem 3rem;
    }
  }

  @media (max-width: 1440px) {
    p.no-info {
      font-size: 2rem;
      padding: 2rem 0rem 0rem 3rem;
    }
  }

  a {
    text-decoration: none;
    margin: 1rem 0rem 4rem 0rem;
    display: flex;
    background-color: ${props => props.theme.colors.gray2};
  }

  div.percentage {
    position: absolute;
    border: 5px solid ${props => props.theme.colors.blue1};
    padding-top: 1.5rem;
    font-size: 2.6rem;
    margin-left: 1.1rem;
    text-align: center;
    border-radius: 45%;
    height: 7rem;
    width: 8.2rem;
    height: 9.4rem;
    background-color: ${props => props.theme.colors.blue1};
  }
  p.value {
    background-color: ${props => props.theme.colors.blue1};
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
    padding: 2rem 0rem 0rem 11rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  p.date {
    padding: 1rem 0rem 0rem 11rem;
    font-size: 2.1rem;
    color: #afafaf;
  }
  p.overview {
    text-align: left;
    font-size: 2rem;
    padding: 1rem 0rem 1rem 1.5rem;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    background-color: ${props => props.theme.colors.gray2};
    color: ${props => props.theme.colors.gray3};
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
      width: 320px;
    }
  }

  p.no-genre {
    display: flex;
    font-size: 3rem;
    padding: 1rem 0rem 0rem 3rem;
    color: ${props => props.theme.colors.gray1};
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
    color: ${props => props.theme.colors.blue1};
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
