import ProjectContainer from "../../src/component/project/project.container";
import styled from "@emotion/styled";
import TitleHeader from "../../src/common/Title";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0px 30px 70px 30px;

  @media screen and (max-width: 767px) {
    padding: 0px;
  }
`;

export default function ProjectPage(props: any) {
  return (
    <Wrapper id="project">
      <TitleHeader title="Projects" />
      <ProjectContainer projects={props.projects} />
    </Wrapper>
  );
}
