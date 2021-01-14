import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;
`;

export const Date = styled.div`
  margin-top: 4rem;
  p.date {
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    height: 8rem;
    background-color: #e6e6e6;
    font-size: 2.1rem;
    padding-top: 3rem;
    padding-right: 2rem;
    color: #afafaf;
  }
  p.title {
    position: absolute;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    padding-left: 4rem;
    padding-top: 2rem;
    color: #1e6194;
    font-size: 3.5rem;
  }
  @media (max-width: 768px) {
    p.title {
      float: left;
      padding-left: 0rem;
      padding-top: 2rem;
      color: #1e6194;
      font-size: 3.5rem;
    }
  }
  @media (max-width: 799px) {
    p.title {
      float: left;
      padding-left: 2rem;
      padding-top: 2rem;
      color: #1e6194;
      font-size: 3.5rem;
    }
  }
  @media (max-width: 1071px) {
    p.title {
      padding-left: 1rem;
    }
  }
`;

export const Sinopse = styled.div`
  display: flex;

  background-color: #f2f2f2;
  justify-content: space-between;
  width: 100%;
  section {
    flex: 1;
  }
  div.film {
    padding-top: 0.1rem;
    padding-left: 4rem;
    padding-right: 3rem;
    text-align: left;
    p.overview {
      margin-top: 3rem;
      font-size: 2rem;
      opacity: 0.8;
      width: 100%;
      color: #2b2a2ad4;
    }
  }
  @media (max-width: 768px) {
    div.film {
      padding-left: 2rem;
      padding-top: 2rem;
    }
  }
  @media (max-width: 799px) {
    div.film {
      padding-left: 2rem;
      padding-top: 2rem;
    }
  }
  p.no-info {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
  }
  @media (max-width: 488px) {
    p.overview {
      width: 80%;
    }
  }
  img.poster {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    max-height: 30%;
    max-width: 30%;
  }
  @media (max-width: 425px) {
    img.poster {
      display: none;
    }
  }
  @media (max-width: 1071px) {
    img.poster {
      width: 25%;
      height: 30%;
      order: -2;
    }
  }
  p.info {
    text-align: left;
    padding-top: 1.8rem;
    padding-bottom: 1rem;
    color: #1e6194;
    /* font-weight: 550; */
    opacity: 0.8;
    font-size: 3rem;
    margin-top: 2rem;
    border-bottom: 2px solid #00ffff;
  }
  @media (max-width: 768px) {
    p.info {
      padding: 0rem;
    }
  }
  @media (max-width: 799px) {
    p.info {
      padding: 0rem;
    }
  }
  ul.list-info {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 2rem;
    color: #1e6194;
    opacity: 0.9;
    font-size: 3rem;
  }
  li {
    margin: 0.5rem;
    font-size: 4rem;
  }
  p.items {
    font-size: 1.5rem;
    text-align: center;
    text-align: center;
    color: #1d1c1c;
    font-weight: 100;
  }
  /* @media (max-width: 488px) {
    ul.list-info {
      display: flex;
      flex-direction: column;
      margin-top: 2rem;
      color: #1e6194;
      p {
        margin: 0.2rem;
      }
    }
  } */

  @media (max-width: 425px) {
    ul.list-info {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      margin-top: 2rem;
      color: #1e6194;
      p {
        margin: 0.2rem;
      }
      img.poster {
        background-image: url('paper.gif');
      }
    }
  }
  div.popularity {
    display: flex;
    flex-direction: row-reverse;
    border: 4px solid #116193;
    border-radius: 50px;
    width: 100px;
    height: 100px;
    justify-content: space-evenly;
    float: right;
    margin-right: 3rem;
  }
  @media (max-width: 488px) {
    div.popularity {
      float: left;
      margin-top: 3rem;
    }
  }
  @media (max-width: 768px) {
    div.popularity {
      float: left;
      margin-top: 2rem;
    }
  }
  @media (max-width: 799px) {
    div.popularity {
      float: left;
      margin-top: 2rem;
    }
  }
  @media (max-width: 1071px) {
    div.popularity {
      float: left;
      margin-top: 2rem;
    }
  }
  div.value {
    background: #116193;
    border: 6px solid #03ced5;
    border-radius: 50px;
    width: 100%;
    height: 100%;
    float: left;
    line-height: 75px;
    text-align: center;
    font-size: 35px;
    color: #03ced5;
  }
  li {
    list-style: none;
    color: #1e6194;
    font-weight: 550;
    font-size: 2rem;
  }
  li.lucre {
    padding-right: 4rem;
  }
  @media (max-width: 488px) {
    p.items {
      text-align: left;
    }
  }
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
      font-size: 16px;
      color: #116193;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }
  }
  @media (max-width: 375px) {
    ul.list-genres {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
    }
  }
  @media (max-width: 425px) {
    ul.list-genres {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
    }
  }
`;

export const Trailer = styled.div`
  .trailer {
    margin-top: 40px;
    margin-bottom: 10px;
  }
`;
