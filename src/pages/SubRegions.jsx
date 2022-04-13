import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './Home.styled';

const SubRegions = () => {
  const param = useParams();
  return <Container>{`SOME THING ${param.subRegions}`}</Container>;
};

export default SubRegions;
