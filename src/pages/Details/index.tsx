import React, { useState, useEffect, useCallback } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import { Movies, Images, Texts } from './styles';
import api from '../../services/api';

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

type MovieParams = Pick<MovieProps, 'id'>;

const Details: React.FC = () => {
  const [films, setFilms] = useState<MovieProps>();
  const { params } = useRouteMatch<MovieParams>();

  const loadMovie = useCallback(async () => {
    const api_url = '2bf45dbd029ec4fbc6d4df66adb594c9';
    const language = 'language=pt-br';

    const { data } = await api.get(
      `/movie/${params.id}?api_key=${api_url}&${language}`,
    );

    setFilms(data);
    console.log(data);
  }, [params.id]);

  useEffect(() => {
    loadMovie();
  }, [loadMovie]);

  return (
    <>
      {films ? (
        <Movies>
          <Images>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w300/${films?.poster_path}`}
                alt={films?.poster_path}
              />
            </div>
          </Images>
          <Texts>
            <div className="original_title">
              {films?.original_title}
              <span>
                {format(parseISO(`${films.release_date}`), 'dd/MM/yyyy')} (
                {films?.original_language})
              </span>
            </div>
            <div className="teste">
              Avaliação dos usuários ({films?.vote_average * 10}% )
            </div>
            <h2>Sipnose:</h2>
            <div className="overview">{films?.overview}</div>

            <div className="genres">
              {films.genres.map(genre => (
                <p key={genre.id}> {genre.name} </p>
              ))}
            </div>
          </Texts>
        </Movies>
      ) : (
        <h3>Aguarde por favor...</h3>
      )}
    </>
  );
};

export default Details;
