import SkillContainer from "../../src/component/skill/skill.container";
import styled from "@emotion/styled";
import TitleHeader from "../../src/common/Title";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0px 25px;
`;

export default function SkillPage() {
  return (
    <Wrapper id="skill">
      <TitleHeader title="Skills" />
      <SkillContainer />
    </Wrapper>
  );
}
