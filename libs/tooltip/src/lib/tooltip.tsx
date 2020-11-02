import React, { useState } from 'react';
import styled, { keyframes } from "styled-components";

import './tooltip.scss';

/* eslint-disable-next-line */
export interface TooltipProps { }

export const Tooltip = ({ children, title }) => {
  const fadeInOpacity = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;
  const Popup = styled.div`
    display: none;
    position: absolute;
    background-color: #000000a1;
    color: white;
    padding: 3px 6px;
    border-radius: 4px;
  `;
  const Container = styled.div`
    position: relative;

    &:hover ${Popup} {
      display: inline-block;
      animation: ${fadeInOpacity} 0.5s;
    }
  `;

  return (
    <Container>
      {children}
      <Popup>
        {title}
      </Popup>
    </Container>
  );
};

export default Tooltip;
