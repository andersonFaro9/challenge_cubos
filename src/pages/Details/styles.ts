import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  text-align: center;
  max-width: 96rem;
  margin: 0 auto;
`;

export const DetailsFilms = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 4rem;
  width: 106rem;
  background-color: #e6e6e6;

  div.title-film {
    color: #116193;

    font-weight: 550;
    font-size: 3.4rem;
    height: 6rem;
    padding-left: 4rem;
    padding-top: 1rem;
  }
  @media (max-width: 1000px) {
    padding-left: 4rem;
  }
  @media (max-width: 1227px) {
    div.title-film {
      padding-left: 0rem;
    }
    div.date {
      padding-left: 22rem;
      position: absolute;
    }
  }

  div.date {
    font-size: 2.1rem;
    padding-top: 2rem;
    padding-left: 70rem;
    color: #afafaf;
  }
  @media (max-width: 1227px) {
    div.date {
      padding-left: 21rem;
      position: absolute;
    }
  }
`;

export const Sinopse = styled.div`
  display: flex;
  background-color: #f2f2f2;
  justify-items: center;
  align-items: flex-start;
  width: 106rem;

  div.film {
    padding-top: 0.1rem;
    padding-left: 4rem;
    padding-right: 3rem;
    text-align: left;

    div.overview {
      margin-top: 1rem;
      font-size: 1.8rem;
      color: #8c8c8c;
      width: 69rem;
      font-weight: bold;
    }

    @media (max-width: 1170px) {
      div.overview {
        width: 61rem;
      }
    }

    @media (max-width: 1040px) {
      div.overview {
        width: 50rem;
      }
    }

    @media (max-width: 1030px) {
      div.overview {
        width: 42rem;
      }
    }
    @media (max-width: 1020px) {
      div.overview {
        width: 38rem;
      }
    }

    @media (max-width: 1000px) {
      div.overview {
        width: 71rem;
        font-size: 2rem;
      }
    }
    @media (max-width: 900px) {
      div.overview {
        width: 63rem;
        font-size: 2rem;
      }
    }

    @media (max-width: 880px) {
      div.overview {
        width: 54rem;
        font-size: 2rem;
      }
    }
    @media (max-width: 870px) {
      div.overview {
        width: 52rem;
        font-size: 2rem;
      }
    }

    p.title {
      text-align: left;
      padding-top: 1.8rem;
      padding-bottom: 1rem;
      color: #1e6194;
      font-weight: 550;
      font-size: 2.5rem;
      border-bottom: 2px solid #00ffff;
    }

    }
  }

  @media (max-width: 1000px) {
    ul.film {
      flex-direction: column;
      align-items: flex-start;
      justify-items: center;
      line-height: 2.4rem;
    }
    img {
      display: none;
    }
  }

  ul.list-film {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 1rem;
  }

  @media (max-width: 1044px) {
    ul.list-film {
      display: flex;
      /* flex-direction: column */
      align-items: flex-start;
      justify-items: space-between;
      margin-top: 1rem;
      width: 20em;
    }
  }

  @media (max-width: 1040px) {
    ul.list-film {
      width: 43rem;
    }
  }

  @media(max-width: 1000px) {
    ul.list-film {
      width: 22em;
    }
  }

  li.lucre {
    padding-right: 4rem;
  }
  li {
    list-style: none;
    color: #1e6194;
    font-weight: 550;
    font-size: 1.9rem;
  }

  p.items {
    font-size: 1.4rem;
    text-align: center;
    color: #595959;
    font-weight: bold;
  }

  @media (max-width: 1243px) {
    img {
      order: -1;
    }
  }
`;

export const Genry = styled.div`
  ul.list-genres {
    margin-top: 3rem;
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-items: space-around;

    li {
      list-style: none;
      border: 2px solid #b0c8d6;
      border-radius: 4.5rem;
      width: 7rem;
      height: 2.9rem;
      margin-right: 1rem;
      background-color: white;

      p {
        font-size: 15px;
        color: #116193;
        font-weight: 600;
        text-align: center;
      }
    }
  }
`;

export const Percentage = styled.div`
  div.number {
    font-size: 4.6rem;
    border-radius: 50%;
    color: #49e3e1;
    border-style: solid;
    border-width: 0.8rem;
    width: 12rem;
    height: 11rem;
    margin-left: 50rem;
    padding-top: 2rem;
    margin-top: 8rem;
    border-color: #116193;
    background-color: #116193;
  }

  @media (max-width: 1044px) {
    div.number {
      margin-left: 0rem;
      margin-top: 2rem;
    }
  }

  div.value {
    text-align: center;
    background-color: #116193;
    border-color: #49e3e1;
    border-style: solid;
    border-width: 0.8rem;
    border-radius: 50%;
    width: 10.4rem;
    height: 9.5rem;
    font-size: 3.9rem;
    color: #49e3e1;
    margin-top: -2rem;
    padding-top: 1.4rem;
  }
`;
