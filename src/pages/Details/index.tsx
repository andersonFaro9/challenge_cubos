import React, { useState, FormEvent } from 'react';

// import { Link, useRouteMatch } from 'react-router-dom'

// import { parseISO, format } from 'date-fns';
import { Genry, Container, Sinopse, DetailsFilms, Percentage } from './styles';
import api from '../../services/api';
import Header from '../../components/Header/styles';

// import thor2 from '../../assets/thor2.jpg';

const Details: React.FC = () => {
  return (
    <Container>
      <Header>Movies</Header>

      <DetailsFilms>
        <div className="title-film">Thor: Ragnarok</div>
        <div className="date">25/10/2017</div>
      </DetailsFilms>

      <Sinopse>
        <div className="film">
          <p className="title">Sinopse</p>
          <div className="overview">
            Thor está aprisionado do outro lado do universo, sem seu martelo, e
            se vê em uma corrida para voltar até Asgard e impedir o Ragnarock, a
            destruição de seu lar e o fim da civilização asgardiana que está nas
            mãos de uma novas e poderosa ameaça, a terrível Hela. Mas primeiro
            ele precisa sobrevier a uma batalha de gladiadores que o coloca
            contra seu ex-aliado e vingador, o Incrível Hulk.
          </div>
          <p className="title">Informações</p>
          <ul className="list-film">
            <li>
              Situação <p className="items">Lançado</p>
            </li>

            <li>
              Idioma <p className="items">Inglês</p>
            </li>
            <li>
              Duração <p className="items">2h10min</p>
            </li>
            <li>
              Orçamento <p className="items">$140.000</p>
            </li>
            <li>
              Receita <p className="items">$820.000</p>
            </li>
            <li className="lucre">
              Lucro <p className="items">$650,000</p>
            </li>
          </ul>
          <Genry>
            <ul className="list-genres">
              <li>
                <p>Ação</p>
              </li>
              <li>
                <p>Aventura</p>
              </li>
              <li>
                <p>Fantasia</p>
              </li>
            </ul>
            <Percentage>
              <div className="number">
                <div className="value">75%</div>
              </div>
            </Percentage>
          </Genry>
        </div>

        {/* <img src={thor2} /> */}
      </Sinopse>
    </Container>
  );
};

export default Details;
