import React, { useState, useEffect, FormEvent } from "react";
import logoImg from '../../assets/virus.svg';
import theMovieDb from '../../services/api';

import { Form, Repositories, Error } from './styles';

import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api'
import Header from '../../components/Header/styles';

interface Repository {
  poster_path: string;
  adult: boolean;
  overview:string;
  release_date: string;
  genre_ids: number;


}
const Dashboard: React.FC = () => {

  const [newSearch, setNewSearch] = useState('');

  const [inputError, setInputError] = useState('')

  const [repositories, setRepositories] = useState<Repository[]>(() => {
    // const storagedRepositories = localStorage.getItem(
    //   '@GithubExplorer:repositories',
    // );
    // if (storagedRepositories) {
    //   return JSON.parse(storagedRepositories);
    // }
    return [];
  });

  async function searhMovie(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!newSearch) {
      setInputError('Adicione um repositório');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newSearch}`);
      const repository = response.data;

        setRepositories([...repositories, repository]);
        setNewSearch('');
        setInputError('');

    }

    catch {
      setInputError('Tente novamente');
    }

  }


  return (
    <>
      <Header>Movies</Header>

      <Form hasError={!!inputError} onSubmit={searhMovie} >
        <input
          value={newSearch}
          onChange={(e) => setNewSearch(e.target.value)}
          placeholder="
           Busque um filme por nome ano ou gênero..."
        />

      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map((repository) => (
          <Link key={repository.poster_path}
            to={`/repositories/${repository.adult}`}>
            <img
              src={repository.overview}
              alt={repository.release_date}
            />
            <div>
              <strong>{repository.genre_ids}</strong>

            </div>
            <FiChevronRight size={20} />
          </Link>

        ))}

      </Repositories>
    </>
  )
}

export default Dashboard;
