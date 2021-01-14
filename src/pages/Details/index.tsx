import React, { useState, useEffect, useCallback } from 'react';

import { useRouteMatch } from 'react-router-dom';

import { parseISO, format } from 'date-fns';

import { Container, Sinopse, Trailer, Date } from './styles';
import api from '../../services/api';
import Header from '../../components/Header/styles';
import imageDefault from '../../assets/image-default.svg';

import { convertMoney } from '../../helpers/helpers';
import { ITrailer } from './interfaces/ITrailer';
import { IGenres } from '../../helpers/IGenres';

import { ISearchMovieProps } from '../../helpers/ISearchMovieProps';
import { ILanguage } from './interfaces/ILanguage';

type IMatchProps = {
  id: string;
};

const Details: React.FC = () => {
  const [movie, setMovies] = useState<ISearchMovieProps | null>(null);

  const [trailers, setTrailer] = useState<ITrailer[]>([]);

  const [genres, setGenres] = useState<IGenres[]>([]);
  const [languages, setLanguage] = useState<ILanguage[]>([]);
  const language = 'language=pt-BR';

  const key = '2bf45dbd029ec4fbc6d4df66adb594c9';
  const video = 'append_to_response=videos';

  const { params } = useRouteMatch<IMatchProps>();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    async function loadMovie() {
      try {
        setLoading(true);

        const response = await api.get(
          `movie/${params.id}?api_key=${key}&${language}&${video}`,
        );

        setMovies(response.data);

        setGenres(response.data.genres);
        setLanguage(response.data.spoken_languages);
        setTrailer(response.data.videos.results);
      } catch (err) {
        setLoading(false);
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
      return `${result} min`;
    }
    return 'Sem informação';
  }, []);

  if (!movie) {
    return <div>Aguardando informações, isso pode levar algum tempo...</div>;
  }

  return (
    <Container>
      <header>
        <Header>Movies</Header>
      </header>
      <Date>
        <p className="title">{movie.original_title}</p>
        <p className="date">
          {movie?.release_date &&
            format(parseISO(movie.release_date), 'dd/MM/yyyy')}
        </p>
      </Date>

      <Sinopse>
        <section>
          <article>
            <div className="film">
              <p className="info">Sinopse</p>

              {!movie.overview ? (
                <p className="no-info">Sinopse indisponível!!</p>
              ) : (
                <p className="overview">{movie.overview}</p>
              )}
              <p className="info">Informações</p>

              <ul className="list-info">
                <li>
                  <p>Situação</p>
                  <p className="items">
                    {movie?.status === 'Released'
                      ? 'Lançado'
                      : 'Sem informação'}
                  </p>
                </li>

                <li>
                  <p>Idioma</p>
                  {languages.map(lang => (
                    <div key={lang.iso_639_1}>
                      <p className="items">
                        {lang.name === 'English' ? 'Inglês' : 'Português'}
                      </p>
                    </div>
                  ))}
                </li>
                <li>
                  <p>Duração</p>
                  <p className="items">
                    {movie?.runtime
                      ? formatTime(movie?.runtime)
                      : 'Sem informação'}
                  </p>
                </li>
                <li>
                  <p>Orçamento</p>
                  <p className="items">
                    {movie?.budget
                      ? convertMoney(movie?.budget)
                      : 'Sem informação'}
                  </p>
                </li>
                <li>
                  <p>Receita</p>
                  <p className="items">
                    {movie?.revenue
                      ? convertMoney(movie?.revenue)
                      : 'Sem informação'}
                  </p>
                </li>
                <li>
                  <p>Lucro</p>
                  <p className="items">
                    {movie?.revenue
                      ? convertMoney(movie?.revenue - movie?.budget)
                      : 'Sem informação'}
                  </p>
                </li>
              </ul>

              <ul className="list-genres">
                {genres.map(genre => (
                  <li key={genre.id}>
                    {genre.name ? genre.name : 'Sem informação'}
                  </li>
                ))}
              </ul>
            </div>
            <div className="popularity">
              <div className="value">{`${movie?.vote_average * 10}%`}</div>
            </div>
          </article>
        </section>
        {!movie?.poster_path ? (
          <img className="poster" src={imageDefault} alt="poster" />
        ) : (
          <img
            className="poster"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="poster"
          />
        )}
      </Sinopse>

      <Trailer>
        {loading ? (
          <h2>Aguardando carregamento de dados...</h2>
        ) : (
          <div className="trailer">
            {trailers.map(tr => (
              <div key={tr.id}>
                {
                  <iframe
                    key={tr.id}
                    width="100%"
                    height="800px"
                    title={tr.name}
                    src={`https://www.youtube.com/embed/${tr.key}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                }
              </div>
            ))}
          </div>
        )}
      </Trailer>
    </Container>
  );
};
export default Details;
