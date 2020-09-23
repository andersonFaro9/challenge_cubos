import React, { useState, useEffect, useCallback } from 'react';
import { useRouteMatch } from 'react-router-dom';

import api from '../../services/api';

interface IFilmes {
  poster_path: string;

  adult: false;
  release_date: string;
  original_title: string;
  overview: string;
}

interface DetailsParams {
  details: string;
}

const Details: React.FC = movieId => {
  const [films, setFilms] = useState<IFilmes | null>(null);

  const { params } = useRouteMatch<DetailsParams>();

  const fetchDate = useCallback(async () => {
    try {
      const api_url = '2bf45dbd029ec4fbc6d4df66adb594c9';

      api.get(`/movie/${movieId}?api_key = ${api_url}`).then(response => {
        const { results } = response.data;
        console.log(results);
      });
    } catch {
      console.log('error');
    }
  }, [movieId]);

  useEffect(() => {
    fetchDate();
  });

  return (
    <>
      <h1>teste {films?.overview}</h1>
    </>
  );
};

export default Details;
