import React from 'react';
import Container from './styles';

interface ITitle {
  original_title: string;
}

const Title: React.FC<ITitle> = (title: ITitle) => {
  return (
    <Container>
      <p className="title">{title.original_title}</p>
    </Container>
  );
};

export default Title;
