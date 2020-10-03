import React, { useState, FormEvent, useCallback } from 'react';

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
  name: string;
}

interface IGenres {
  id: string;
  name: string;
}

const Dashboard: React.FC = () => {
  const [newSearch, setNewSearch] = useState('');

  const [inputError, setInputError] = useState('');

  const [movies, setMovies] = useState<IProperties[]>([]);
  const [genres, setGenres] = useState<IGenres[]>([]);

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
      const language = 'language=pt-br';

      // Aqui mostra os filmes com seus detalhes, titulo, e imagem
      const films = await api.get(
        `search/movie?api_key=${api_url}&query=${newSearch}  `,
      );

      // setMovies(films.data.results);

      // Aqui deve trazer o gênero do filme, e mostrar no front-end mas não traz, no momento, ele traz pelo console.log()
      const gen = await api.get(
        `/genre/movie/list?api_key=${api_url}&${language}`,
      );

      setGenres(gen.data);
      setMovies(films.data.results);
      setNewSearch('');
      setInputError('');

      console.log(films.data.results);
      console.log(gen.data);
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

                <p className="original_title">
                  {genres.find(genre => genre.id === mv.id)?.name}
                </p>
              </div>
              {<div>{/*  Aqui o gênero deve apar    ecer} */}</div>}
              <FiChevronRight size={20} />
            </Link>
          ))}
        </Films>
      </Container>
    </>
  );
};

export default Dashboard;
