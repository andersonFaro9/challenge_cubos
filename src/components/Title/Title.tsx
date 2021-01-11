import React from 'react';

import { TitleSearch, TitleDetall } from './styles';

interface ITitle {
  original_title?: string;
}

const Title: React.FC<ITitle> = (title?: ITitle) => {
  return (
    <>
      <TitleSearch>{title?.original_title}</TitleSearch>

      <TitleDetall />
    </>
  );
};

export default Title;
