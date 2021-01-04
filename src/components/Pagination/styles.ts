import styled from 'styled-components';

const Page = styled.div`
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }

  nav .page-link {
    border: 3px solid #116193;
    border-radius: 50px;
    width: 55px;
    height: 55px;
    float: left;
    margin-right: 20px;
    cursor: pointer;
  }

  nav .page-link span {
    font-size: 30px;
    line-height: 40px;
    color: #03ced5;
    background: #116193;
    border: 4px solid #03ced5;
    border-radius: 50px;
    width: 100%;
    height: 100%;
    float: left;

    text-align: center;
  }

  nav .page-item {
    margin-right: 25px;
    cursor: pointer;
  }

  nav .page-item span {
    font-size: 25px;
    color: #116193;
    width: 100%;
    line-height: 60px;
    text-align: center;
  }
`;
export default Page;
