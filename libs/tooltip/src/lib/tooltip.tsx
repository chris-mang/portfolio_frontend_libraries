import React from 'react';
import styled from "styled-components";

import './tooltip.scss';

/* eslint-disable-next-line */
export interface TooltipProps { }

export const Tooltip = () => {
  const Title = styled.h1`
    /* color: red; */
  `;

  return (
    <div>
      <Title>Welcome to tooltip!</Title>
    </div>
  );
};

export default Tooltip;
