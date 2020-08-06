import React from 'react';
import styled from 'styled-components';

import ActionBox from './ActionBox';

const WorkflowContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 7rem;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const ConnectLine = styled.div`
  border-right: 1px solid #333;
  height: 20px;
`

export default () => {
  return (
    <WorkflowContainer>
      <ActionBox
        headerType="trigger-start"
        headerText="TRIGGER START"
      />
      <ConnectLine />
      <ActionBox
        headerType="destination"
        headerText="DESTINATION: Device Magic Database"
      />
    </WorkflowContainer>
  )
};