import CareerContainer from "../../src/component/career/career.container";
import styled from "@emotion/styled";
import TitleHeader from "../../src/common/Title";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0px 30px;
`;

export default function CareerPage() {
  return (
    <Wrapper id="career">
      <TitleHeader title="Career & Education" />
      <CareerContainer />
    </Wrapper>
  );
}
