import ContactContainer from "../../src/component/contact/contact.container";
import styled from "@emotion/styled";
import TitleHeader from "../../src/common/Title";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 0px 30px;
  background-color: tomato;
`;

export default function ContactPage() {
  return (
    <Wrapper>
      <TitleHeader title="Contact " />
      <ContactContainer />
    </Wrapper>
  );
}
