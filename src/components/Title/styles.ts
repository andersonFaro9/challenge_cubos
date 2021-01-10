import styled from 'styled-components';

const Container = styled.div`
  p.title {
    position: absolute;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 4rem;
    padding-top: 2rem;
    margin-left: 4rem;
    color: #116193;
    font-weight: 550;
    font-size: 3.4rem;
    height: 6rem;

    p.title2 {
    padding-left: 11rem;
    padding-top: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

`;

export default Container;
