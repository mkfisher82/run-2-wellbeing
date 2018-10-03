import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 960px;
  padding: 40px 5%;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 1.5rem;
  margin-left: 20px;
  background-color: #107a66;
  width: 200px;
  height: 50px;
  border-radius: 5px;
  color: white;
`;

export default function About() {
  return (
    <Container>
      <form name="client" method="POST" action="/.netlify/functions/sendClientAgreement" data-netlify="true">
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
          <ol>
            <li className="condition">
              <p>
                Run 2 Wellbeing is not an acute mental health service and as such clients experiencing acute mental
                health symptoms (including but not limited to: suicidal ideation; persistent low mood/severe anxiety
                heavily impacting on activities of daily living; paranoia and self harm) will also need to be under the
                care of a mental health provider. This is a condition of participation in the programme.
              </p>
            </li>
            <li className="condition">
              <p>
                All client information will be kept confidential and will not be shared with third parties with the
                exception of information regarding serious crime, child welfare and self endangerment. In these limited
                circumstances information may need to be shared with relevant authorities in order to ensure the safety
                of the client and or a vulnerable person. Agreement to this limit of confidentiality is a condition of
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
                Payment for the forthcoming training period is required prior to receiving a personalised programme,
                with the exception of the two week free trial.
              </p>
            </li>
          </ol>

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
    </Container>
  );
}
