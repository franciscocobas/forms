import React from 'react';
import styled from 'styled-components';

const WorkflowContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 7rem;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Box = styled.div`
  border: 1px solid #bdbdbd;
  width: 60%;
  margin: 0 auto;
  border-radius: 5px;
`;

const BoxHeader = styled.div`
  border-bottom: 1px solid #bdbdbd;
  background-color: #5ebe00;
  color: white;
  padding-left: 40px;
  height: 40px;
  display: flex;
  align-items: center;
`;

const BoxBody = styled.div`
  background-color: white;
  font-size: 14px;
  padding: 15px;
  border-radius: 5px;
`;

export default () => {
  return (
    <WorkflowContainer>
      <Box>
        <BoxHeader>TRIGGER START</BoxHeader>
        <BoxBody>
          <p><span className="semi-bold">Submission:</span> Form Title</p>
          <p><span className="semi-bold">Devices/Groups:</span> All</p>
        </BoxBody>
      </Box>
    </WorkflowContainer>
  )
};