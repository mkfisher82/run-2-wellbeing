import React from 'react';
// import styled from 'styled-components';

const email = () => {
  return (
    <form name="contact" method="POST" action="/.netlify/functions/sendEmail">
      <input type="email" name="to" id="to" placeholder="someone@example.co.nz" />
      <button type="submit">Get Started!</button>
    </form>
  );
};

export default email;
