import styled from "styled-components";
import Inputs from "./Inputs";
import { useState } from "react";

export default function Form() {
  const [values, setValues] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;

    setValues({ ...values, [id]: value });
  };

  const validate = () => {
    let errors = {};
    const email_pattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const password_pattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,}$/;

    // name validation
    if (!values.name.trim()) {
      errors.name = "First Name cannot be empty";
    } else if (values.name.length < 3) {
      errors.name = "First Name must be at least 3 characters";
    }

    // Last name validation
    if (!values.lastName.trim()) {
      errors.lastName = "Last Name cannot be empty";
    } else if (values.lastName.length < 2) {
      errors.lastName = "Last Name must be at least 3 characters";
    }

    // email validation
    if (!values.email.trim()) {
      errors.email = "Email cannot be empty";
    } else if (!email_pattern.test(values.email)) {
      errors.email = "Looks like this is not an email";
    }

    // password validation
    if (!values.password.trim()) {
      errors.password = "Password cannot be empty";
    } else if (!password_pattern.test(values.password)) {
      errors.password =
        "Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters.";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length == 0) {
      setSuccessMessage(
        "Form submitted successfully! Please check your email."
      );
      setValues({ name: "", lastName: "", email: "", password: "" });
    } else {
      setSuccessMessage("");
    }
  };

  return (
    <Container>
      <InfoSnippet>
        Try it free 7 days <span>then $20/mo. thereafter</span>{" "}
      </InfoSnippet>
      <FormComponent onSubmit={handleSubmit}>
        <Inputs
          values={values}
          setValues={setValues}
          handleChange={handleChange}
          errors={errors}
        />
        <button type="submit">CLAIM YOUR FREE TRIAL</button>
        {successMessage && <p className="successMessage">{successMessage}</p>}
        <p className="disclaimer">
          By clicking the button, you are agreeing to our{" "}
          <span>Terms and Services</span>{" "}
        </p>
      </FormComponent>
    </Container>
  );
}

const Container = styled.div``;

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

  @media (min-width: 1400px) {
    width: 540px;
    margin-top: 0;
  }

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
  /* gap: 16px; */
  width: 327px;
  border-radius: 8px;

  @media (min-width: 1400px) {
    width: 540px;
    padding: 40px;
  }

  & button {
    box-shadow: 0px -4px 0px 0px rgba(0, 0, 0, 0.09) inset;
    background: rgba(56, 204, 139, 1);
    border: none;
    border-radius: 5px;
    padding: 15px;
    cursor: pointer;
    margin-top: 16px;

    font-size: 15px;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 1px;
    text-align: center;
    color: rgba(255, 255, 255, 1);

    &:hover {
      background: rgba(119, 226, 179, 1);
    }

    @media (min-width: 1400px) {
      margin-top: 20px;
    }
  }

  & .disclaimer {
    text-align: center;
    font-size: 11px;
    font-weight: 500;
    line-height: 21px;
    color: rgba(186, 183, 212, 1);
    margin-top: 8px;
  }

  & span {
    color: #f96a6a;
    font-weight: 700;
  }

  & .successMessage {
    text-align: center;
    color: #67c667;
    margin-top: 10px;
    font-size: 12px;
    font-weight: 700;
    font-style: italic;
  }
`;
