import styled from "@emotion/styled";

interface ITitleHeader {
  title: string;
}

export const Header = styled.h1`
  margin-top: 73px;
  font-size: 36px;
  font-weight: 700;
  border-bottom: 4px solid black;
  cursor: pointer;
  &:hover {
    border-bottom: 5px solid #845ec2;
    transition-duration: 0.5s;
  }
`;

export default function TitleHeader(props: ITitleHeader) {
  return (
    <>
      <Header>🏷️ {props.title}</Header>
    </>
  );
}
