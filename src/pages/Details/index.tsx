import React, { useState, useEffect, useCallback } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Movies, Images, Texts } from './styles';
import api from '../../services/api';

interface IMovieParams {
  id: string;
}

interface IMovie {
  poster_path: string;
  adult: false;
  release_date: string;
  original_title: string;
  overview: string;
  vote_average: number;
  title: string;
  certification: string;
  original_language: string;
}

interface IGenre {
  genre: string;
  id: number;
  name: string;
}
const Details: React.FC = () => {
  const { params } = useRouteMatch<IMovieParams>();

  const api_key = '2bf45dbd029ec4fbc6d4df66adb594c9';
  const language = 'language=pt-br';

  const [movies, setMoviesDetails] = useState<IMovie>();
  const [genres, setGenres] = useState<IGenre>();

  //  Traz os detalhes do filme
  const getMovies = useCallback(async () => {
    const response = await api.get(`/movie/${params.id}?api_key=${api_key}`);

    setMoviesDetails(response.data);
    // console.log(response.data);
  }, [params.id]);

  // Deve trazer o genero do filme
  const getGenres = useCallback(async () => {
    const response = await api.get(
      `/genre/movie/list?api_key=${api_key}&${language}`,
    );

    setGenres(response.data);
    console.log(response.data);
  }, []);

  useEffect(() => {
    getMovies();
    getGenres();
  }, [getMovies, getGenres]);

  return (
    <>
      {movies ? (
        <Movies>
          <Images>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w300/${movies?.poster_path}`}
                alt={movies?.poster_path}
              />
            </div>
          </Images>
          <Texts>
            <div className="original_title">
              {movies?.original_title}
              <span>
                {movies?.release_date} ({movies?.original_language})
              </span>
            </div>
            <div className="teste">
              Avaliação dos usuários ({movies?.vote_average * 10}% )
            </div>
            <h2>Sipnose:</h2>
            <div className="overview">{movies?.overview}</div>
            <div>
              {genres ? (
                <p className="original_title">{genres.name}</p>
              ) : (
                <h1>ddd</h1>
              )}
            </div>
            {/* {genres.length > 0 &&
              genres.map(mv => (
                <div key={mv.id}>
                  <div>
                    <p className="original_title">{mv.name}</p>
                  </div>
                </div>
              ))} */}
          </Texts>
        </Movies>
      ) : (
        <h3>Aguarde por favor...</h3>
      )}
    </>
  );
};

export default Details;
