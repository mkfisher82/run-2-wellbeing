import React from 'react';
import styled from 'styled-components';

const SubHeading = styled.h3`
  padding: 5px 0;
`;
const SubText = styled.p`
  padding: 5px 0;
`;

const subSection = props => {
  return (
    <div>
      <SubHeading>{props.subHeading}</SubHeading>
      <SubText>{props.subText}</SubText>
    </div>
  );
};

export default subSection;
