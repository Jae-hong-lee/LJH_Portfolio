import styled from "@emotion/styled";

interface ITitleHeader {
  title: string;
}

export const Header = styled.h1`
  margin-top: 73px;
  font-size: 2.5rem;
  font-weight: 700;
  border-bottom: 4px solid black;
  cursor: pointer;
  transition-duration: 0.5s;
  &:hover {
    color: #563e7d;
    border-bottom: 5px solid #845ec2;
  }
  @media (max-width: 992px) {
    margin-top: 60px;
    font-size: 2rem;
  }

  @media screen and (max-width: 767px) {
    margin-top: 50px;
    font-size: 2rem;
    border-bottom: 3px solid black;
    &:hover {
      color: #563e7d;
      border-bottom: 3px solid #845ec2;
    }
  }
`;

export default function TitleHeader(props: ITitleHeader) {
  return (
    <>
      <Header>🏷️ {props.title}</Header>
    </>
  );
}
