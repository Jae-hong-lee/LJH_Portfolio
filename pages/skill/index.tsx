import SkillContainer from "../../src/component/skill/skill.container";
import styled from "@emotion/styled";
import TitleHeader from "../../src/common/Title";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 0px 30px;
  background-color: cornflowerblue;
`;
export default function SkillPage() {
  return (
    <Wrapper>
      <TitleHeader title="Skills" />
      <SkillContainer />
    </Wrapper>
  );
}
