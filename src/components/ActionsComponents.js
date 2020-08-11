import React from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as CloseIcon } from '../images/close.svg'

const Box = styled.div`
  border: 1px solid #bdbdbd;
  width: 60%;
  margin: 0 auto;
  border-radius: 5px;
`;

const BoxHeader = styled.div`
  border-bottom: 1px solid #bdbdbd;
  color: white;
  padding-left: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  ${props => {
    switch (props.color) {
      case 'destination':
        return css`
          background-color: #333;
        `
      case 'finish':
        return css`
          background-color: #0061ff;
        `
      default:
        return css`
          background-color: #5ebe00;
        `
    }
  }}
  p {
    flex: 1;
  }
  #close-icon {
    background-color: transparent;
    border: none;
    svg {
      fill: white;
      width: 15px;
      height: 15px;
    }
    margin-right: 15px;
  }
`;

const BoxBody = styled.div`
  background-color: white;
  font-size: 14px;
  padding: 15px;
  border-radius: 5px;
`;

export const ActionBox = ({ headerType, headerText, children }) => (
  <Box>
    <BoxHeader color={headerType}>
      <p>{headerText}</p>
      <button id="close-icon">
        <CloseIcon />
      </button>
    </BoxHeader>
    <BoxBody>
      {children}
    </BoxBody>
  </Box>
);