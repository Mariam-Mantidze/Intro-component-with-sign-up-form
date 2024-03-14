import styled from "styled-components";

export default function Inputs() {
  const inputs = [];
  return (
    <>
      <Input type="text" placeholder="First Name" />
      <Input type="text" placeholder="Last Name" />
      <Input type="email" placeholder="Email Adress" />
      <Input type="password" placeholder="Password" />
    </>
  );
}

const Input = styled.input`
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
`;
