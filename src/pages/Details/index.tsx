import React, { useState, useEffect, useCallback } from 'react';
import { useRouteMatch } from 'react-router-dom';

import api from 'services/api';
import * as S from './styles';

type MovieProps = {
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

type Genre = {
  id: number;
  name: string;
};

type MovieParams = Pick<MovieProps, 'id'>;

const Details = () => {
  const [films, setFilms] = useState<MovieProps>();
  const { params } = useRouteMatch<MovieParams>();

  const loadMovie = useCallback(async () => {
    const api_url = '2bf45dbd029ec4fbc6d4df66adb594c9';

    const { data } = await api.get(`/movie/${params.id}?api_key=${api_url}`);

    setFilms(data);
  }, [params.id]);

  useEffect(() => {
    loadMovie();
  }, [loadMovie]);

  return (
    <>
      {films ? (
        <S.Movies>
          <S.Images>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w300/${films?.poster_path}`}
                alt={films?.poster_path}
              />
            </div>
          </S.Images>
          <S.Texts>
            <div className="original_title">
              {films?.original_title}
              <span>
                {films?.release_date} ({films?.original_language})
              </span>
            </div>
            <div className="teste">
              Avaliação dos usuários ({films?.vote_average * 10}% )
            </div>

            <h2>
              <strong>Sipnose:</strong>
            </h2>
            <div className="overview">{films?.overview} </div>
          </S.Texts>
          {films.genres.map(genre => (
            <S.Genres key={genre.id}>{genre.name}</S.Genres>
          ))}
        </S.Movies>
      ) : (
        <h3>Aguarde por favor...</h3>
      )}
    </>
  );
};

export default Details;
