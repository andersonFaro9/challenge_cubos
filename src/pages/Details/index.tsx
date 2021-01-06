import React, { useState, useEffect, useCallback } from 'react';

import { useRouteMatch } from 'react-router-dom';

// import { parseISO, format } from 'date-fns';
import format from 'date-fns/format';

import { Genry, Container, Sinopse, DetailsFilms, Percentage } from './styles';
import api from '../../services/api';
import Header from '../../components/Header/styles';
import image from '../../assets/no-image2.svg';

import convertMoney from '../../helpers/helpers';
import { ITrailer } from './interfaces/ITrailer';
import { IGenres } from '../../helpers/IGenres';

import { ISearchMovieProps } from '../../helpers/ISearchMovieProps';
import { ILanguage } from './interfaces/ILanguage';

type IMatchProps = {
  id: string;
};

const Details: React.FC = () => {
  const [movie, setMovie] = useState<ISearchMovieProps>();

  const [trailer, setTrailer] = useState<ITrailer[]>([]);

  const [genres, setGenres] = useState<IGenres[]>([]);
  const [languages, setLanguage] = useState<ILanguage[]>([]);
  const language = 'language=pt-BR';

  const token = '2bf45dbd029ec4fbc6d4df66adb594c9';

  const { params } = useRouteMatch<IMatchProps>();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadMovie() {
      try {
        setLoading(true);
        const response = await api.get(
          `movie/${params.id}?api_key=${token}&${language}&append_to_response=videos`,
        );

        setMovie(response.data);

        setGenres(response.data.genres);
        setLanguage(response.data.spoken_languages);
        setTrailer(response.data.videos.results);

        console.log(response.data.videos.results);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    }

    loadMovie();
  }, [params.id]);

  const formatTime = useCallback((time?: string) => {
    let result = `${time}`;

    if (result.length === 3) {
      result = result.replace(/([0-9]{2})$/g, 'h $1');
      return result;
    }
  }, []);

  const formatDate = useCallback((date?: string) => {
    if (date) {
      const [year, month, day] = date.split('-');
      return `${day}/${month}/${year}`;
    }
  }, []);

  return (
    <Container>
      <Header>Movies</Header>
      <DetailsFilms>
        <div className="title-film">{movie?.title}</div>
        <div className="date">{formatDate(`${movie?.release_date}`)}</div>
      </DetailsFilms>
      <Sinopse>
        <div className="film">
          <p className="title">Sinopse</p>
          <div className="overview">{movie?.overview}</div>
        </div>
        <p className="title">Informações</p>
        <ul className="list-film">
          <li>
            Situação
            <p className="items">
              <span>
                {movie?.status === 'Released' ? 'Lançado' : 'Em breve'}
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
            Duração
            {formatTime(movie?.runtime)
              ? `${formatTime(movie?.runtime)}min`
              : 'Sem informação'}
          </li>
          <li>
            <h2>Orçamento</h2>
            {convertMoney(movie?.budget)
              ? convertMoney(movie?.budget)
              : 'Sem informação'}
          </li>
          <li>
            <h2>Receita</h2>

            {convertMoney(movie?.revenue)
              ? convertMoney(movie?.revenue)
              : 'Sem informação'}
          </li>
          <li>
            <h2>Lucro</h2>
            <br />
            {convertMoney(movie?.budget)
              ? convertMoney(movie?.budget! - movie?.revenue!)
              : 'Sem informação'}
          </li>
        </ul>
      </Sinopse>
      <Genry>
        {genres.map(genre => (
          <div key={genre.id}>{genre.name ? genre.name : 'Sem informação'}</div>
        ))}
        <Percentage>
          <div className="popularity">
            {movie?.vote_average ? movie?.vote_average! * 10 : 'Sem informação'}{' '}
          </div>
        </Percentage>
      </Genry>
      {!movie?.poster_path ? (
        <img src={image} alt="poster" />
      ) : (
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="poster"
        />
      )}
      {loading ? (
        <h2>Aguardando carregamento de dados...</h2>
      ) : (
        <div>
          {trailer.map(tr => (
            <div key={tr.id}>
              {
                <div className="trailer" key={tr.id}>
                  <iframe
                    width="1280"
                    height="540"
                    title={tr.name}
                    src={`https://www.youtube.com/embed/${tr.key}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              }
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};
export default Details;
