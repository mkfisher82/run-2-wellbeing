import React from 'react';
import styled from 'styled-components';
import AboutNicole from '../images/about_nicole.jpg';

const ProfilePic = styled.img`
  border-radius: 3px;
  justify-self: center;
`;

const nicoleImgLarge = () => <ProfilePic src={AboutNicole} width="100%" alt="Nicole on a trail run at Otatara Pa" />;

export default nicoleImgLarge;
