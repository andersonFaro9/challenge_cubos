import React, { useState, FormEvent } from "react";

import { Form, Films, Error } from './styles';

import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api'
import Header from '../../components/Header/styles';

interface IProperties {
  id: string;
  poster_path: string;
  adult: false;
  release_date: string;
  original_title: string;
  overview:string;
  backdrops:string;

}
const Dashboard: React.FC = () => {

  const [newSearch, setNewSearch] = useState('');

  const [inputError, setInputError] = useState('');

  const [movies, setMovies] = useState<IProperties[]>([]);

  async function searhMovie(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!newSearch) {
      setInputError('Digite o nome do filme');
      return;
    }


    try {
      const api_url = '2bf45dbd029ec4fbc6d4df66adb594c9';

      const response = await api.get(`/search/movie?api_key=${api_url}&query= ${newSearch}`);

      const results = response.data.results;

        setMovies(results);
        setNewSearch('');
        setInputError('');
        console.log(results);

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


      <Films>
        {movies.map((movie, mv ) => (
          <Link key={mv}
            to={"" }>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.poster_path}
            />
            <div>
              <p className= "original_title">{movie.original_title}</p>
              <p>{movie.release_date}</p>
              <p>{movie.overview}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>

        ))}

      </Films>
    </>
  )
}

export default Dashboard;
