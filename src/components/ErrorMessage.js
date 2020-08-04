import React from 'react';
import styled from 'styled-components';

const PError = styled.p`
  color: #cb4335;
`

export default ({ children }) => {
  return <PError>{children}</PError>
}