import React, { useState, FormEvent, useCallback, useEffect } from 'react';

import { Link, useRouteMatch } from 'react-router-dom';

import { parseISO, format } from 'date-fns';
import { Form, Info, Footer, Genry, Container } from './styles';

import Header from '../../components/Header/styles';
import api from '../../services/api';

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
  const language = 'language=pt-br';

  const formatGenre = (id: string) => {
    const result = genres.find(genre => genre.id === id);
    if (result) return result.name;
    return result;
  };

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    try {
      const response = await api.get(
        `search/movie?api_key=${token}&${language}&query=${newSearch}`,
      );

      // eslint-disable-next-line no-shadow
      const genres = await api.get(
        `genre/movie/list?api_key=${token}&${language}`,
      );

      setMovies(response.data.results);
      setGenres(genres.data.genres);
      console.log(genres.data.genres);

      setNewSearch('');
    } catch {}
  }

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
      </Form>

      {movies ? (
        <Info>
          {movies.map(movie => (
            <Link key={movie.id} to={`/details/${movie.id}`}>
              {!movie.poster_path ? (
                <img
                  src={
                    'https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg'
                  }
                  alt="poster"
                />
              ) : (
                <img
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  alt="poster"
                />
              )}

              <div className="details">
                <div className="percentage">
                  <div className="value">{movie.vote_average * 10} %</div>
                </div>
                <div className="title">{movie.original_title}</div>
                <div className="date">
                  {format(parseISO(`${movie.release_date}`), 'dd/MM/yyyy')}
                </div>
                <div className="sinopse">{movie.overview}</div>
              </div>
              <Genry>
                <ul className="genres">
                  {typeof movie.genre_ids === 'object' ? (
                    movie.genre_ids.map(genre_id => (
                      <li key={genre_id}>{formatGenre(genre_id)}</li>
                    ))
                  ) : (
                    <span>Sem gênero</span>
                  )}
                </ul>
              </Genry>
            </Link>
          ))}
        </Info>
      ) : (
        <h1>err</h1>
      )}

      <Footer>
        {/* <div className="button-pages">
          <button>1</button>
        </div> */}
      </Footer>
    </Container>
  );
};

export default Search;
