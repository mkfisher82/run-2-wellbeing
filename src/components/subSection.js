import React from 'react';
import styled from 'styled-components';

const SubHeading = styled.h3``;
const SubText = styled.p``;

const subSection = ({ subHeading, subText }) => {
  return (
    <div>
      <SubHeading>{subHeading}</SubHeading>
      <SubText>{subText}</SubText>
    </div>
  );
};

export default subSection;
