import React, { useState, useEffect } from 'react';
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
  budget: string;
}

const Details: React.FC = () => {
  const [films, setFilms] = useState<IMovie | null>(null);

  const { params } = useRouteMatch<IMovieParams>();

  useEffect(() => {
    const api_url = '2bf45dbd029ec4fbc6d4df66adb594c9';

    api.get(`/movie/${params.id}?api_key=${api_url}`).then(response => {
      console.log(response.data);
      setFilms(response.data);
    });
  }, [params.id]);

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
          </Texts>
        </Movies>
      ) : (
        <h3>Aguarde por favor...</h3>
      )}
    </>
  );
};

export default Details;
