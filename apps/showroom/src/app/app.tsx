import React from 'react';
import styled from "styled-components";

import './app.scss';
import { Tooltip } from '@portfolio-libs/tooltip';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';

export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.scss file.
   */

  const Container = styled.div`
      color: blue;
      display: flex;
   `;
  return (
    <Container>
      <Tooltip />
    </Container>
  );
};

export default App;
