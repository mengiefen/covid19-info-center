import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';
import { Container, Card, CardWrapper } from './Home.styled';
import AFRICA from '../assets/images/continents/africa1.svg';
import ASIA from '../assets/images/continents/asia.svg';
import AUSTRALIA from '../assets/images/continents/asia2.svg';
import EUROPE from '../assets/images/continents/europe.svg';
import NORTH from '../assets/images/continents/north_america.svg';
import LATIN from '../assets/images/continents/latin_america.svg';

const Home = () => {
  const navigate = useNavigate();
  const continets = [
    { id: 1, continent: 'Africa', img: AFRICA },
    { id: 2, continent: 'Asia', img: ASIA },
    { id: 3, continent: 'Australia', img: AUSTRALIA },
    { id: 4, continent: 'Europe', img: EUROPE },
    { id: 5, continent: 'North America', img: NORTH },
    { id: 6, continent: 'South America', img: LATIN },
  ];
  return (
    <Container>
      <CardWrapper>
        {continets.map((name) => (
          <Card
            key={name.id}
            bgImg={name.img}
            onClick={() => {
              navigate(`/${name.continent}`);
            }}
          >
            <h3 className="continent-name">{name.continent}</h3>
            <HiOutlineArrowCircleRight
              onClick={() => {
                navigate(`/${name.continent}`);
              }}
              className="open-icon"
            />
          </Card>
        ))}
      </CardWrapper>
    </Container>
  );
};

export default Home;
