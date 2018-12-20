import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #107a66;
  text-decoration: none;
  font-size: 1em;
  text-align: center;
  color: #fff;
  outline: none;
  padding: 12px 60px;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  letter-spacing: 1.5px;
  display: block;
  margin: 20px auto;
`;

const List = styled.ol`
  padding: 0 20px;

  li {
    padding: 0px;
  }
`;

const contact = () => {
  return (
    <form
      name="client"
      method="POST"
      action="/.netlify/functions/sendClientAgreement"
      data-netlify="true"
      id="agreement"
    >
      <input type="hidden" name="form-name" value="contact" />
      <fieldset>
        <legend>Client Details:</legend>
        <p>
          <label htmlFor="firstname">
            First Name: <input type="text" name="firstname" id="firstname" />
          </label>
        </p>
        <p>
          <label htmlFor="lastname">
            Last Name: <input type="text" name="lastname" id="lastname" />
          </label>
        </p>
        <p>
          <label htmlFor="email">
            Your Email: <input type="email" name="email" id="email" />
          </label>
        </p>
        <p>
          <label htmlFor="dob">
            Date of Birth: <input type="date" name="dob" id="dob" />
          </label>
        </p>
      </fieldset>
      <fieldset>
        <legend>Client Agreement:</legend>
        <List>
          <li className="condition">
            <p>
              Run 2 Wellbeing is not an acute mental health service and as such clients experiencing acute mental health
              symptoms (including but not limited to: suicidal ideation; persistent low mood/severe anxiety heavily
              impacting on activities of daily living; paranoia and self harm) will also need to be under the care of a
              mental health provider. This is a condition of participation in the programme.
            </p>
          </li>
          <li className="condition">
            <p>
              All client information will be kept confidential and will not be shared with third parties with the
              exception of information regarding serious crime, child welfare and self endangerment. In these limited
              circumstances information may need to be shared with relevant authorities in order to ensure the safety of
              the client and or a vulnerable person. Agreement to this limit of confidentiality is a condition of
              participation in the programme.
            </p>
          </li>
          <li className="condition">
            <p>
              Run 2 Wellbeing will not be held liable for any injuries arising in the course of training. It is the
              responsibility of the client to monitor their physical health and to seek medical/allied health support
              for any injuries/pain arising in the course of training. Run 2 Wellbeing will support clients to adapt
              their personalised programmes in response to any injuries/medical advice.
            </p>
          </li>
          <li className="condition">
            <p>
              Payment for the forthcoming training period is required prior to receiving a personalised programme, with
              the exception of the two week free trial.
            </p>
          </li>
        </List>

        <p className="acceptCB">
          <label htmlFor="acceptCB">
            I Accept
            <input type="checkbox" name="accept" id="acceptCB" className="regular-checkbox" />
          </label>
        </p>
      </fieldset>
      <p>
        <Button type="submit">Send</Button>
      </p>
    </form>
  );
};

export default contact;
