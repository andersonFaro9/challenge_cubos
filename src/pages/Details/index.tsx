import React, { useState, useEffect } from 'react';

import { useRouteMatch } from 'react-router-dom';

// import { parseISO, format } from 'date-fns';
import { Genry, Container, Sinopse, DetailsFilms, Percentage } from './styles';
import api from '../../services/api';
import Header from '../../components/Header/styles';

interface IMatchProps {
  id: string;
}
interface IMovies {
  id: string;
  poster_path: string;
  release_date: string;
  original_title: string;
  overview: string;
  vote_average: number;
  title: string;
  original_language: string;
  budget: number;
  revenue: number;
  status: string;
  runtime: string;
  videos: string;
  formattedValue: string;
}

interface IGenres {
  id: string;
  name: string;
}

interface ILanguage {
  iso_639_1: string;
  name: string;
  spoken_languages: string;
}

interface ITrailer {
  video: string;
  id: string;
  key: string;
  name: string;
}

const Details: React.FC = () => {
  const [movies, setMovies] = useState<IMovies>();

  const [trailer, setTrailer] = useState<ITrailer[]>([]);

  const [genres, setGenres] = useState<IGenres[]>([]);
  const [languages, setLanguage] = useState<ILanguage[]>([]);

  const token = '2bf45dbd029ec4fbc6d4df66adb594c9';

  const { params } = useRouteMatch<IMatchProps>();

  const formatDate = (date: string) => {
    if (date) {
      const [year, month, day] = date.split('-');
      return `${day}/${month}/${year}`;
    }
  };

  useEffect(() => {
    async function loadMovie() {
      const response = await api.get(
        `movie/${params.id}?api_key=${token}&language=pt-BR&append_to_response=videos`,
      );

      setMovies(response.data);

      // setMovies({
      //   ...response.data, // Estou considerando que só tem um objeto de filme dentro do response.data
      //   formattedValue: formatValue(
      //     String(response.data.revenue - response.data.budget),
      //   ),
      // });
      setGenres(response.data.genres);
      setLanguage(response.data.spoken_languages);
      setTrailer(response.data.results);

      console.log(response.data.genres);
      console.log(response.data);
      console.log(response.data.results);
    }

    loadMovie();
  }, [movies, params.id]);

  const formatTime = (time?: string) => {
    let result = `${time}`;

    if (result.length === 3) {
      result = result.replace(/([0-9]{2})$/g, 'h $1');
      return result;
    }
  };

  const formatValue = (value: string) => {
    let result = `${value}`;
    result = result.replace(/([0-9]{2})$/g, ',$1');
    if (result.length > 6)
      result = result.replace(/([0-9]{3}),([0-9]{2})$/g, '.$1,$2');

    if (result.length > 9)
      result = result.replace(
        /([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g,
        '.$1.$2,$3',
      );

    return result;
  };
  return (
    <Container>
      <Header>Movies</Header>
      <DetailsFilms>
        <div className="title-film">{movies?.title}</div>
        <div className="date">{formatDate(`${movies?.release_date}`)}</div>
      </DetailsFilms>

      <Sinopse>
        <div className="film">
          <p className="title">Sinopse</p>
          <div className="overview">{movies?.overview}</div>
        </div>
        <p className="title">Informações</p>
        <ul className="list-film">
          <li>
            Situação
            <p className="items">
              <span>
                {movies?.status === 'Released' ? 'Lançado' : 'Em breve'}
              </span>
            </p>
          </li>

          <li>
            <h2>Idioma</h2>
            {languages.map(lg => (
              <div key={lg.iso_639_1}>
                {lg.name === 'English' ? 'Inglês' : 'Português'}
              </div>
            ))}
          </li>
          <li>
            Duração <span>{formatTime(movies?.runtime)}min</span>
          </li>
          <li>
            <h2>Orçamento</h2>
            {
              movies?.budget
                .toLocaleString('pt-Br', {
                  style: 'currency',
                  currency: 'USD',
                })
                .split('US')[1]
            }
          </li>
          <li>
            <h2>Receita</h2>
            {
              movies?.revenue
                .toLocaleString('pt-Br', {
                  style: 'currency',
                  currency: 'USD',
                })
                .split('US')[1]
            }
          </li>
          <li>
            <h2>Lucro</h2>
            <br />

            {/* {movies?.budget - movies?.revenue} */}

            {
              (movies?.budget! - movies?.revenue!)
                .toLocaleString('pt-Br', { style: 'currency', currency: 'USD' })
                .split('US')[1]
            }
          </li>
        </ul>
      </Sinopse>

      <Genry>
        {genres.map(genre => (
          <div key={genre.id}>{genre.name}</div>
        ))}
        <Percentage>
          <div className="popularity">
            <span>{movies?.vote_average! * 10} %</span>
          </div>
        </Percentage>
      </Genry>
      {trailer?.map(tr => (
        <div className="trailer" key={tr.id}>
          <iframe
            width="100%"
            height="100%"
            title={tr.name}
            src={`https://www.youtube.com/embed/${tr.key}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </Container>
  );
};
export default Details;
