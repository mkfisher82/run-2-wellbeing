import React from 'react';
import styled from 'styled-components';


const IFrame = styled.iframe`
  border: none;
  overflow: hidden;
  display: none;
  padding: 5px;

  @media screen and (min-width:850px) {
    display: block;
  }
`;

const facebookIFrame = () => {
  return (
    <IFrame src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Frun2wellbeing&tabs&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId" height="80px" scrolling="no" frameborder="0" allowtransparency="true" allow="encrypted-media"></IFrame>
  );
};

export default facebookIFrame;