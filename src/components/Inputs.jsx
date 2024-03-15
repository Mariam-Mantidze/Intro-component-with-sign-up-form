import styled from "styled-components";
import ErrorIcon from "/images/icon-error.svg";

export default function Inputs({ values, handleChange, errors }) {
  return (
    <>
      <InputContainer>
        <Input
          onChange={handleChange}
          value={values.name}
          errors={errors.name}
          id="name"
          type="text"
          placeholder="First Name"
        />
        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        {errors.name ? <ErrorImg src={ErrorIcon} alt="Error Icon" /> : null}
      </InputContainer>

      <InputContainer>
        <Input
          value={values.lastName}
          errors={errors.lastName}
          onChange={handleChange}
          id="lastName"
          type="text"
          placeholder="Last Name"
        />
        {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
        {errors.lastName ? <ErrorImg src={ErrorIcon} alt="Error Icon" /> : null}
      </InputContainer>

      <InputContainer>
        <Input
          value={values.email}
          errors={errors.email}
          onChange={handleChange}
          id="email"
          type="email"
          placeholder="Email Adress"
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        {errors.email ? <ErrorImg src={ErrorIcon} alt="Error Icon" /> : null}
      </InputContainer>

      <InputContainer>
        <Input
          value={values.password}
          errors={errors.password}
          onChange={handleChange}
          id="password"
          type="password"
          placeholder="Password"
        />
        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        {errors.password ? <ErrorImg src={ErrorIcon} alt="Error Icon" /> : null}
      </InputContainer>
    </>
  );
}

const InputContainer = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px 19px;
  border: 1px solid rgba(222, 222, 222, 1);
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0.25px;
  text-align: left;
  color: rgba(61, 59, 72, 1);
  margin-top: 16px;

  @media (min-width: 1400px) {
    margin-top: 20px;
  }
`;

const ErrorMessage = styled.p`
  font-size: 10px;
  font-style: italic;
  font-weight: 500;
  text-align: right;
  color: rgba(255, 121, 121, 1);
  margin-top: 6px;
`;

const ErrorImg = styled.img`
  position: absolute;
  top: 30px;
  right: 17px;

  @media (min-width: 1400px) {
    top: 35px;
    right: 27px;
  }
`;
