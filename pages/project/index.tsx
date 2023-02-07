import ProjectContainer from "../../src/component/project/project.container";
import styled from "@emotion/styled";
import TitleHeader from "../../src/common/Title";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 0px 30px;
  background-color: lightgreen;
`;

export default function ProjectPage() {
  return (
    <Wrapper>
      <TitleHeader title="Projects" />
      <ProjectContainer />
    </Wrapper>
  );
}
