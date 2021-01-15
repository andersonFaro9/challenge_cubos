import React, { useState, FormEvent, useCallback } from 'react';

import { Link } from 'react-router-dom';

import { parseISO, format } from 'date-fns';

import { Form, Info, Genry, Container } from './styles';
import fail from '../../assets/fail-conection.svg';
import imageDefault from '../../assets/image-default.svg';

import Header from '../../components/Header/styles';
import api from '../../services/api';

import { ISearchMovieProps } from '../../helpers/ISearchMovieProps';
import { IGenres } from '../../helpers/IGenres';

import Pagination from '../../components/Pagination/Pagination';

const Search: React.FC = () => {
  const [newSearch, setNewSearch] = useState('');
  const [movies, setMovies] = useState<ISearchMovieProps[]>([]);

  const [genres, setGenres] = useState<IGenres[]>([]);

  const token = '2bf45dbd029ec4fbc6d4df66adb594c9';
  const language = 'language=pt-BR';
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const [moviesPerPage] = useState(4);

  const paginate = useCallback((pageNumber: number) => {
    return setCurrentPage(pageNumber);
  }, []);

  const formatGenre = useCallback(
    (id?: string) => {
      const result = genres.find(genre => genre.id === id);
      return result ? result.name : undefined;
    },
    [genres],
  );

  async function toSearch(event: FormEvent<HTMLFormElement>): Promise<void> {
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

      setNewSearch('');
    } catch (err) {
      console.log('ocorreu um erro na busca');
    }
  }

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  return (
    <Container>
      <section>
        <article>
          <header>
            <Header>Movies</Header>
          </header>
          <Form>
            <form onSubmit={toSearch}>
              <input
                value={newSearch}
                onChange={e => setNewSearch(e.target.value)}
                placeholder="Busque um filme por nome, ano ou gênero..."
              />
            </form>
          </Form>

          {loading ? (
            <div className="error">
              Aguardando informações, isso pode levar algum tempo...
            </div>
          ) : (
            <Info>
              {currentMovies.map(movie => (
                <Link key={movie.id} to={`/details/${movie.id}`}>
                  {!movie.poster_path ? (
                    <img className="poster" src={imageDefault} alt="poster" />
                  ) : (
                    <img
                      className="poster"
                      src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                      alt="poster"
                    />
                  )}

                  <div className="details">
                    <div className="percentage">
                      <p className="value">{movie.vote_average * 10} %</p>
                    </div>
                    <p className="title">{movie.original_title}</p>
                    <p className="date">
                      {movie?.release_date &&
                        format(parseISO(movie.release_date), 'dd/MM/yyyy')}
                    </p>

                    {!movie.overview ? (
                      <p className="no-info">Sinopse indisponível!!</p>
                    ) : (
                      <p className="overview">{movie.overview}</p>
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
          {loading && <img src={fail} alt="fail" />}

          {!loading && (
            <Pagination
              moviesPerPage={moviesPerPage}
              totalMovies={movies.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          )}
        </article>
      </section>
    </Container>
  );
};

export default Search;
