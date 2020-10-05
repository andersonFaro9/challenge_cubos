import React, { useState, FormEvent } from 'react';

import { FiChevronRight } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';

import { parseISO, format } from 'date-fns';
import { Form, Films, Container, Error } from './styles';
import api from '../../services/api';
import Header from '../../components/Header/styles';

type DashboardProps = {
  id: string;
  poster_path: string;
  adult: false;
  release_date: string;
  original_title: string;
  overview: string;
  vote_average: number;
  title: string;
  certification: string;
  original_language: string;
  budget: string;
  genres: Genre[];
};

interface MovieProps {
  id: string;
  poster_path: string;
  adult: false;
  release_date: string;
  original_title: string;
  overview: string;
  vote_average: number;
  title: string;
  certification: string;
  original_language: string;
  budget: string;
  genres: Genre[];
}

type Genre = {
  id: number;
  name: string;
};

const Dashboard: React.FC = () => {
  const [newSearch, setNewSearch] = useState('');
  const [inputError, setInputError] = useState('');
  const [movies, setMovies] = useState<DashboardProps[]>([]);

  async function searhMovie(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    try {
      const api_url = '2bf45dbd029ec4fbc6d4df66adb594c9';
      const language = 'language=pt-br';
      const { data } = await api.get(
        `search/movie?api_key=${api_url}&${language}&query=${newSearch}`,
      );

      const { results } = data;

      setMovies(results);
      setInputError('');
      setNewSearch('');
    } catch {
      setInputError(
        'Ops! algo não está correto, verifique novamente por favor',
      );
    }
  }

  return (
    <Container>
      <Header>Movies</Header>
      <Form hasError={!!inputError} onSubmit={searhMovie}>
        <input
          value={newSearch}
          onChange={e => setNewSearch(e.target.value)}
          placeholder="Busque um filme por nome, ano ou gênero..."
        />
      </Form>
      {inputError && <Error>{inputError}</Error>}
      {movies ? (
        <Films>
          {movies.map(movie => (
            <Link key={movie.id} to={`/details/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w300/${movie?.poster_path}`}
                alt={movie.original_title}
              />
              <div>
                <p className="original_title">{movie.original_title}</p>
                <p className="release_date">
                  {format(parseISO(`${movie.release_date}`), 'dd/MM/yyyy')}
                </p>
                <p className="vote_average">{movie.vote_average * 10} %</p>
                <p className="overview">{movie.overview}</p>
              </div>

              <FiChevronRight size={20} />
            </Link>
          ))}
        </Films>
      ) : (
        <h3>Aguarde por favor...</h3>
      )}
    </Container>
  );
};

export default Dashboard;
