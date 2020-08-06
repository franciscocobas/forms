import React from 'react';
import styled, { css } from 'styled-components';

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
    switch(props.color) {
      case 'destination':
        return css`
          background-color: #333;
        `
      default:
        return css`
          background-color: #5ebe00;
        `
    }
  }}
`;

const BoxBody = styled.div`
  background-color: white;
  font-size: 14px;
  padding: 15px;
  border-radius: 5px;
`;

export default ({ headerType, headerText }) => (
  <Box>
    <BoxHeader color={headerType}>{headerText}</BoxHeader>
    <BoxBody>
      <p><span className="semi-bold">Submission:</span> Form Title</p>
      <p><span className="semi-bold">Devices/Groups:</span> All</p>
    </BoxBody>
  </Box>
)