import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom';

import Header from '../../components/Header/styles';

import {  RepositoryInfo, Issues } from './styles'

import api from '../../services/api';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  id: number;
  original_title: string;
  original_language: string;
  title : string;
  backdrop_path: string;
  popularity: string;
  vote_count: number;
  video : false;
  vote_average: number;
}

interface Issue {

  id: number;
  original_title: string;
  original_language: string;
  title : string;
  backdrop_path: string;
  popularity: string;
  vote_count: number;
  video : false;
  vote_average: number;

}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(response => {
      setRepository(response.data);
    });


  }, [params.repository]);

  return (
    <>
        <Header>Movies</Header>


      {repository ? (
        <RepositoryInfo>
          <header>
            <img src={repository.backdrop_path} alt={repository.backdrop_path} />
            <div>
              <strong>{repository.title}</strong>
              <p>{repository.original_title}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.vote_average}</strong>
              <span>vote_average</span>
            </li>
            <li>
              <strong>{repository.popularity}</strong>
              <span>popularity</span>
            </li>
            <li>
              <strong>{repository.vote_count}</strong>
              <span>vote_count</span>
            </li>
          </ul>

        </RepositoryInfo>
      ) : (
          <h3>Loading...</h3>

        )}

      {/* <Issues>
        {issues.map(issue => (
          <a target="blank" key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues> */}
    </>
  );
}

export default Repository;
