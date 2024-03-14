import styled from "styled-components";
import Inputs from "./Inputs";

export default function Form() {
  return (
    <>
      <InfoSnippet>Try it free 7 days then $20/mo. thereafter</InfoSnippet>
      <FormComponent>
        <Inputs />
        <button type="submit">CLAIM YOUR FREE TRIAL</button>
        <p>
          By clicking the button, you are agreeing to our{" "}
          <span>Terms and Services</span>{" "}
        </p>
      </FormComponent>
    </>
  );
}

const InfoSnippet = styled.h3`
  margin-top: 64px;
  color: rgba(255, 255, 255, 1);
  background: rgba(94, 84, 164, 1);
  padding: 18px 66px;
  border-radius: 8px;
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);

  font-size: 15px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0.2678571045398712px;
  text-align: center;
`;

const FormComponent = styled.form`
  margin-top: 24px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 327px;
  border-radius: 8px;
`;
