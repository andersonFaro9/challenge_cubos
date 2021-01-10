import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;
`;

export const Date = styled.div`
  p.date {
    display: flex;
    align-items: flex-start;
    justify-items: right;
    margin-top: 4rem;
    width: 100%;
    height: 8rem;
    background-color: #e6e6e6;
    font-size: 2.1rem;
    padding-top: 2rem;
    padding-left: 175rem;
    color: #afafaf;
  }
`;

export const Image = styled.div`
  display: flex;
  margin-left: auto;
  order: 2;
`;

export const Sinopse = styled.div`
  display: flex;
  background-color: #f2f2f2;
  justify-items: center;
  align-items: flex-start;
  width: 100%;

  div.film {
    padding-top: 0.1rem;
    padding-left: 4rem;
    padding-right: 3rem;
    text-align: left;
  }
  p.no-info {
    display: flex;
  }
  p.overview {
    margin-top: 3rem;
    opacity: 0.8;
    width: 100%;
  }

  p.info {
    text-align: left;
    padding-top: 1.8rem;
    padding-bottom: 1rem;
    color: #1e6194;
    font-weight: 550;
    font-size: 2.5rem;
    margin-top: 2rem;
    border-bottom: 2px solid #00ffff;
  }

  ul.list-info {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    p {
      margin: 0.5rem;
    }
  }

  div.popularity {
    border: 4px solid #116193;
    border-radius: 50px;
    width: 100px;
    height: 100px;
    float: right;
    margin-right: 3rem;
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

  p.items {
    font-size: 1.4rem;
    text-align: center;
    color: #595959;
    font-weight: bold;
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
`;

export const Trailer = styled.div`
  .trailer {
    margin-top: 40px;
    margin-bottom: 10px;
  }
`;
