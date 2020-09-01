import React, { useState, useEffect, FormEvent } from "react";
import logoImg from '../../assets/virus.svg';
import theMovieDb from '../../services/api';

import { Form, Repositories, Error } from './styles';

import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api'
import Header from '../../components/Header/styles';

interface Repository {
  id: string;
  poster_path: string;
  adult: false;
  release_date: string;
  original_title: string;
  overview:string;
  title:string;


}
const Dashboard: React.FC = () => {

  const [newSearch, setNewSearch] = useState('');

  const [inputError, setInputError] = useState('');

  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );
    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
    return [];
  });

  useEffect (() => {

  }, [repositories])

  async function searhMovie(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!newSearch) {
      setInputError('Adicione um repositório');
      return;
    }


    try {
      const api_url = '2bf45dbd029ec4fbc6d4df66adb594c9';

      const response = await api.get<Repository>(`/search/movie?api_key=${api_url}&query= ${newSearch}`);

      const repository = response.data;

        setRepositories([...repositories, repository]);
        setNewSearch('');
        setInputError('');

        console.log(repository);

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
        {repositories.map((movie, i) => (
          <Link key={i}
            to={`/search/movies/${newSearch}` }>
            <img
              src={movie.poster_path}
              alt={movie.poster_path}
            />
            <div>
              <p>{movie.poster_path}</p>
              <p>{movie.poster_path}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>

        ))}

      </Repositories>
    </>
  )
}

export default Dashboard;
