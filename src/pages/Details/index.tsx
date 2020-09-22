import React, { useState, FormEvent, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { FiChevronRight } from 'react-icons/fi';

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

const Details: React.FC = () => {
  const [films, setFilms] = useState<IFilmes | null>(null);

  const { params } = useRouteMatch<DetailsParams>();

  useEffect(() => {
    api.get(`search/movie${params.details}`).then(response => {
      setFilms(response.data);
    });
  }, [params.details]);

  return (
    <>
      <h1>teste {films?.overview}</h1>
    </>
  );
};

export default Details;
