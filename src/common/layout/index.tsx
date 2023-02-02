import styled from "@emotion/styled";
import FooterContainer from "./footer/footer.container";
import HeaderContainer from "./header/header.container";

const Body = styled.div`
  width: 100%;
  height: 100%;
`;

export default function Layout(props: any) {
  return (
    <div>
      <HeaderContainer />
      <Body>{props.children}</Body>
      <FooterContainer />
    </div>
  );
}
