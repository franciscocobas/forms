import React from 'react';
import styled from 'styled-components';

import { ActionBox } from './ActionsComponents';

const WorkflowContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 7rem;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const ConnectPlusLine = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  #plus {
    background-color: #5ebe00;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    top: 12.5px;
    cursor: pointer;
    &:before {
      content: '';
      position: absolute;
      height: 15px;
      right: 11.5px;
      border-right: 2px solid white;
      top: 5px;
    }
    &:after {
      content: '';
      position: absolute;
      height: 15px;
      right: 11.5px;
      border-right: 2px solid white;
      top: 5px;
      transform: rotate(90deg)
    }
  }
  #line {
    border-right: 1px solid #333;
    height: 50px;
  }
`;

const ConnectPlustLineComponent = () => (
  <ConnectPlusLine>
    <div id="plus"></div>
    <div id="line"></div>
  </ConnectPlusLine>
);

export default () => {
  return (
    <WorkflowContainer>
      <ActionBox
        headerType="trigger-start"
        headerText="TRIGGER START"
      >
        <p><span className="semi-bold">Submission:</span> Form Title</p>
        <p><span className="semi-bold">Devices/Groups:</span> All</p>
      </ActionBox>
      <ConnectPlustLineComponent />
      <ActionBox
        headerType="destination"
        headerText="DESTINATION: Device Magic Database"
      >
        <p><span className="semi-bold">Submission:</span> Form Title</p>
        <p><span className="semi-bold">Devices/Groups:</span> All</p>
      </ActionBox>
      <ConnectPlustLineComponent />
      <ActionBox
        headerType="finish"
        headerText="FINISH - REPEAT"
      >
        <p><span className="semi-bold">Submission:</span> Form Title</p>
        <p><span className="semi-bold">Devices/Groups:</span> All</p>
      </ActionBox>
    </WorkflowContainer>
  )
};