import styled from "styled-components";

export default function InformationText() {
  return (
    <>
      <Header>
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.{" "}
        </p>
      </Header>
    </>
  );
}

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 1);
  width: 327px;
  gap: 16px;

  & h1 {
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: -0.2916666865348816px;
    text-align: center;
  }

  & p {
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;

    text-align: center;
  }
`;
