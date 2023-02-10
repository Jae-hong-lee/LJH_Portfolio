import HomeContainer from "../../src/component/home/home.container";
import styled from "@emotion/styled";

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 850px) {
    height: 100%;
  }
  @media screen and (max-width: 767px) {
    height: 100%;
  }
`;

export default function MainHomePage() {
  return (
    <Wrapper id="home">
      <HomeContainer />
    </Wrapper>
  );
}
