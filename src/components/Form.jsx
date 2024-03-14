import styled from "styled-components";
import Inputs from "./Inputs";

export default function Form() {
  return (
    <>
      <InfoSnippet>
        Try it free 7 days <span>then $20/mo. thereafter</span>{" "}
      </InfoSnippet>
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
  width: 327px;
  margin-top: 64px;
  color: rgba(255, 255, 255, 1);
  background: rgba(94, 84, 164, 1);
  padding: 18px 66px;
  border-radius: 8px;
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);

  font-size: 15px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0.2678571045398712px;
  text-align: center;

  span {
    font-weight: 400;
    color: #ffffffc4;
  }
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

  & button {
    box-shadow: 0px -4px 0px 0px rgba(0, 0, 0, 0.09) inset;
    background: rgba(56, 204, 139, 1);
    border: none;
    border-radius: 5px;
    padding: 15px;
    cursor: pointer;

    font-size: 15px;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 1px;
    text-align: center;
    color: rgba(255, 255, 255, 1);

    &:hover {
      background: rgba(119, 226, 179, 1);
    }
  }

  & p {
    text-align: center;
    font-size: 11px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0px;
    text-align: center;
    color: rgba(186, 183, 212, 1);
    width: 249px;
    margin-top: -8px;
  }

  & span {
    color: #f96a6a;
    font-weight: 700;
  }
`;
