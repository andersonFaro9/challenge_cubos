import React, { useState, useEffect, useCallback } from 'react';
import { useRouteMatch } from 'react-router-dom';

import api from '../../services/api';

interface MovieParams {
  id: string;
}

const Details: React.FC = () => {
  // const [films, setFilms] = useState<IFilmes | null>(null);

  const { params } = useRouteMatch<MovieParams>();

  const fetchDate = useCallback(async () => {
    try {
      const api_url = '2bf45dbd029ec4fbc6d4df66adb594c9';

      api.get(`/movie/${params.id}?api_key=${api_url}`).then(response => {
        console.log(response.data);
      });
    } catch {
      console.log('error');
    }
  }, [params.id]);

  useEffect(() => {
    fetchDate();
  });

  return <> {/* <h1>teste {films?.overview}</h1> */}</>;
};

export default Details;
