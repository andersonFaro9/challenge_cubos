import React, { useState, FormEvent, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { parseISO, format } from 'date-fns';

import { Form, Info, Footer, Genry, Container } from './styles';
import image from '../../assets/no-image2.svg';

import Header from '../../components/Header/styles';
import api from '../../services/api';
import fail from '../../assets/internet.svg';
import Teste from '../../components/Pagination/styles';
import Pagination from '../../components/Pagination/Pagination';

interface ISearchProps {
  id: string;
  genre_ids: [];
  poster_path: string;
  release_date: string;
  original_title: string;
  overview: string;
  vote_average: number;
  title: string;
  original_language: string;
  budget: string;
}

interface IGenres {
  id: string;
  name: string;
}

const Search: React.FC = () => {
  const [newSearch, setNewSearch] = useState('');
  const [movies, setMovies] = useState<ISearchProps[]>([]);

  const [genres, setGenres] = useState<IGenres[]>([]);

  const token = '2bf45dbd029ec4fbc6d4df66adb594c9';
  const language = 'language=pt-BR';
  const [loading, setLoading] = useState(false);
  const [inputError, setInputError] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumbers] = useState([]);
  const [moviesPerPage] = useState(4);

  function paginate(pageNumber: number) {
    return setCurrentPage(pageNumber);
  }

  const formatGenre = (id: string): string | undefined => {
    const result = genres.find(genre => genre.id === id);
    return result ? result.name : undefined;
  };

  const formatDate = (date: string) => {
    if (date) {
      const [year, month, day] = date.split('-');
      return `${day}/${month}/${year}`;
    }
  };

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await api.get(
        `search/movie?api_key=${token}&${language}&query=${newSearch}`,
      );

      // eslint-disable-next-line no-shadow
      const genres = await api.get(
        `genre/movie/list?api_key=${token}&${language}&query=${newSearch}`,
      );

      setLoading(false);

      setMovies(response.data.results);
      setGenres(genres.data.genres);
      setInputError('');

      setNewSearch('');
    } catch {
      setInputError('Sem conexão, tente novamente');
      setLoading(false);
    }
  }

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  return (
    <Container>
      <Header>Movies</Header>
      <Form>
        <form onSubmit={handleSubmit}>
          <input
            value={newSearch}
            onChange={e => setNewSearch(e.target.value)}
            placeholder="Busque um filme por nome, ano ou gênero..."
          />
        </form>

        {inputError && <img src={fail} alt="" />}
      </Form>

      {loading ? (
        <h2>Aguardando carregamento de dados...</h2>
      ) : (
        <Info>
          {currentMovies.map(movie => (
            <Link key={movie.id} to={`/details/${movie.id}`}>
              {!movie.poster_path ? (
                <img src={image} alt="poster" />
              ) : (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt="poster"
                />
              )}

              <div className="details">
                <div className="percentage">
                  <div className="value">{movie.vote_average * 10} %</div>
                </div>

                <div className="title">{movie.original_title}</div>
                <div className="date">
                  {formatDate(`${movie.release_date}`)}

                  {/* {format(parseISO(`${movie.release_date}`), 'dd/MM/yyyy')} */}
                </div>

                {!movie.overview ? (
                  <p className="no-info">Sinopse indisponível!!</p>
                ) : (
                  <div className="sinopse">{movie.overview}</div>
                )}
                <Genry>
                  <ul className="genres">
                    {movie.genre_ids.length ? (
                      movie.genre_ids.map(genre_id => (
                        <li key={genre_id}>{formatGenre(genre_id)}</li>
                      ))
                    ) : (
                      <p className="no-genre"> Gênero indisponível!!</p>
                    )}
                  </ul>
                </Genry>
              </div>
            </Link>
          ))}
        </Info>
      )}
      {!loading ? (
        <Pagination
          moviesPerPage={moviesPerPage}
          totalMovies={movies.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      ) : (
        ''
      )}
      <Footer>{/* <div className="button-pages"></div> */}</Footer>
    </Container>
  );
};

export default Search;
