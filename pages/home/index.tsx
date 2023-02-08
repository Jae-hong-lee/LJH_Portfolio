import HomeContainer from "../../src/component/home/home.container";
import styled from "@emotion/styled";

export const Wrapper = styled.section``;

export default function MainHomePage() {
  return (
    <Wrapper id="home">
      <HomeContainer />
    </Wrapper>
  );
}
