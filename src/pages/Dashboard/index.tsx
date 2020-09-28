import React, { useState, FormEvent } from 'react';

import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Form, Films, Container, Error } from './styles';
import api from '../../services/api';
import Header from '../../components/Header/styles';

interface IProperties {
  id: string;
  poster_path: string;
  adult: false;
  release_date: string;
  original_title: string;
  overview: string;
  vote_average: number;
}
const Dashboard: React.FC = () => {
  const [newSearch, setNewSearch] = useState('');

  const [inputError, setInputError] = useState('');

  const [movies, setMovies] = useState<IProperties[]>([]);

  async function searhMovie(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!newSearch) {
      setInputError(
        'Não foram encontrados filmes que correspondam aos seus critérios de busca.',
      );
      return;
    }

    try {
      const api_url = '2bf45dbd029ec4fbc6d4df66adb594c9';

      const response = await api.get(
        `search/movie?api_key=${api_url}&query=${newSearch}`,

        // `movie/popular?api_key=${api_url}&page=1`,
      );

      const { results } = response.data;

      setMovies(results);
      setNewSearch('');
      setInputError('');
      console.log(results);
    } catch {
      setInputError(
        'Ops! Problema com a conexão ou o filme não existe, tente novamente por favor',
      );
    }
  }

  return (
    <>
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
        <Films>
          {movies.map(mv => (
            <Link key={mv.original_title} to={`/details/${mv.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w300/${mv.poster_path}`}
                alt={mv.poster_path}
              />
              <div>
                <p className="original_title">{mv.original_title}</p>
                <p className="release_date">{mv.release_date}</p>
                <p className="vote_average">{mv.vote_average * 10} %</p>
                <p className="overview">{mv.overview}</p>
              </div>

              <FiChevronRight size={20} />
            </Link>
          ))}
        </Films>
      </Container>
    </>
  );
};

export default Dashboard;
