import styled, { css } from 'styled-components';
import { shade } from 'polished';



interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3A3A3A;
  margin-top: 30px;
  max-width: 650px;
  line-height: 56px;


  @media (max-width:500px) {

    font-size: 36px;
    line-height: 36px;


  }
`;

export const Form = styled.form<FormProps> `
  margin-top:40px;
  max-width: 960px;
  display: flex;

  input {
    flex: 1;
    height: 50px;
    padding: 0 24px;
    border: 0;
    border-right:0;
    background-color: #e6e6e6;
    border-radius: 21px;
    color: #3A3A3A;
    border: 2px solid #FFF;
    border-right:0;

    ${(props) => props.hasError &&

    css`
        border-color: #c53030;

    ` }

    &::placeholder {
      color: #baccd7;
      padding: 15px;
      font-size: 18px;
    }
  }
  /* button {
    width : 210px;
    height: 70px;
    background: #1E90FF;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #FFF;
    &:hover {
      background: ${shade(0.2, '#1E90FF')};
    }
  } */
  @media (max-width: 600px) {
    flex-wrap: wrap;
    input {

      width: 100%;
      border-radius: 5px;
      border-right: 2px solid #fff;
      ${props =>
    props.hasError &&
    css`
          border-color: #c53030;

        `}
    }
    button {
      margin-top: 10px;

      width: 100%;
      border-radius: 5px;
    }
  }

  `;

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top:30px;
  `;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;
  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius:50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size:20px;
        color : #3D3D4D;
      }

      p{
        font-size:   18px;
        color : #a8a8b3;
        margin-top: 4px;
      }

    }

    svg {
        margin-left: auto;
        color:  #cbcbcb ;
      }



  }
`;
