import React from 'react';
import Teste from './styles';

interface IPagination {
  moviesPerPage: number;
  totalMovies: number;
  paginate: (page: number) => void;
  currentPage?: number;
}
const Pagination: React.FC<IPagination> = (page: IPagination) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(page.totalMovies / page.moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Teste>
      <nav>
        {pageNumbers.map(number => (
          <div
            key={number}
            onClick={() => page.paginate(number)}
            className={page.currentPage === number ? 'page-link' : 'page-item'}
          >
            <span>{number}</span>
          </div>
        ))}
      </nav>
    </Teste>
  );
};
export default Pagination;
