import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom';

import Header from '../../components/Header/styles';

import {  RepositoryInfo, Issues } from './styles'

import api from '../../services/api';

interface RepositoryParams {
  repository: string;
}


// original_title: "Jack Ryan: Shadow Recruit"
// overview: "Jack Ryan, as a young covert CIA analyst, uncovers a Russian plot to crash the U.S. economy with a terrorist attack."
// popularity: 33.55
// poster_path: "/m7HcLUodrD4lM4s0Hui1tzO2pjO.jpg"
// release_date: "2014-01-15"
// title: "Jack Ryan: Shadow Recruit"
// video: false
// vote_average: 6.1
// vote_count: 2053

interface Repository {

  original_title: string;
  original_language: string;
  title : string;
  id: string;
  // release_date: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video : false;
  vote_average: number;
}

interface Issue {

  id: number;
  original_title: string;
  original_language: string;
  title : string;
  poster_path: string;
  popularity: string;
  vote_count: number;
  video : false;
  vote_average: number;

}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);


  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {

    const api_url = '2bf45dbd029ec4fbc6d4df66adb594c9';



    api.get(`/search/movie/?api_key=${api_url}&query= ${repository}`).then(response => {
      setRepository(response.data.results);
      console.log(response.data);
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
              <strong>{repository.original_title}</strong>
              <p>{repository.popularity}</p>
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
