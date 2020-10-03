import styled from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Container = styled.div`
  flex: 1;
  text-align: center;
  max-width: 960px;
  margin: 0 auto;

  @media (max-width: 500px) {
    font-size: 36px;
    line-height: 36px;
  }
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 960px;
  display: flex;

  input {
    flex: 1;
    height: 50px;
    padding: 0 24px;
    border: 0;
    border-right: 0;
    background-color: #e6e6e6;
    border-radius: 16px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    &::placeholder {
      color: #baccd7;
      padding: 15px;
      font-size: 18px;
    }
  }
  button {
    width: 210px;
    height: 70px;
    background: #1e90ff;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    &:hover {
      background: ${shade(0.2, '#1E90FF')};
    }
  }

  @media (max-width: 600px) {
    flex-wrap: wrap;
    input {
      width: 100%;
      border-radius: 5px;
      border-right: 2px solid #fff;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #999;
  font-size: 14px;
  margin-top: 11px;
`;

export const Films = styled.div`
  margin-top: 30px;
  max-width: 100%;
  a {
    background: #fff;
    border-radius: 15px;
    width: 100%;
    padding: 1px;
    display: block;

    text-decoration: none;
    border: solid 1px #e5e5e5;
    box-shadow: 2px 2px 7px 0px #e5e5e5;
    display: flex;
    align-items: center;
    transition: transform 0.1;

    &:hover {
      transform: translateX(03px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 94px;
      height: 141px;
      border-radius: 3%;
    }

    div {
      margin: 0 09px;
      flex: 1;

      .original_title {
        font-size: 16px;
        margin: 0px;
        flex: 1;
        display: flex;
        font-weight: bold;
        color: #3d3d4d;
        font-family: 'Abel', 'Lato', Arial, Helvetica, sans-serif;
      }

      .release_date {
        flex: 1;
        display: flex;
        font-size: 15px;
        white-space: nowrap;
        color: #999;
        text-align: left;
      }

      .overview {
        flex: 1;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-top: 07px;

        font-size: 15px;
        color: #474747;

        font-weight: 300px;
        text-align: left;
      }

      .vote_average {
        flex: 1;
        margin-top: 07px;
        font-size: 15px;
        color: #474747;
        width: 40px;
        border-radius: 16px;
        border: 4px solid #3a3a3a;
        border-right: 0;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbcb;
    }
  }
`;
