import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from 'services/api';
import Header from 'components/Header/styles';
import * as S from './styles';

type DashboardProps = {
  id: string;
  poster_path: string;
  adult: false;
  release_date: string;
  original_title: string;
  overview: string;
  vote_average: number;
};

const Dashboard = () => {
  const [newSearch, setNewSearch] = useState('');
  const [inputError, setInputError] = useState('');
  const [movies, setMovies] = useState<DashboardProps[]>([]);

  async function searhMovie(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    try {
      // alterar
      const api_url = '2bf45dbd029ec4fbc6d4df66adb594c9';

      const { data } = await api.get(
        `search/movie?api_key=${api_url}&query=${newSearch}`,
      );

      const { results } = data;

      if (!results.lenght) {
        setInputError(
          'Não foram encontrados filmes que correspondam aos seus critérios de busca.',
        );
      }

      setMovies(results);
      setNewSearch('');
    } catch {
      setInputError(
        'Ops! Problema com a conexão ou o filme não existe, tente novamente por favor',
      );
    }
  }

  return (
    <S.Container>
      <Header>Movies</Header>
      <S.Form hasError={!!inputError} onSubmit={searhMovie}>
        <input
          value={newSearch}
          onChange={e => setNewSearch(e.target.value)}
          placeholder="Busque um filme por nome, ano ou gênero..."
        />
      </S.Form>
      {inputError && <S.Error>{inputError}</S.Error>}
      <S.Films>
        {movies.map(movie => (
          <Link key={movie.id} to={`/details/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w300/${movie?.poster_path}`}
              alt={movie.original_title}
            />
            <div>
              <p className="original_title">{movie.original_title}</p>
              <p className="release_date">{movie.release_date}</p>
              <p className="vote_average">{movie.vote_average * 10} %</p>
              <p className="overview">{movie.overview}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </S.Films>
    </S.Container>
  );
};

export default Dashboard;
