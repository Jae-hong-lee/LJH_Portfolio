import styled from "@emotion/styled";
import FooterContainer from "./footer/footer.container";
import HeaderContainer from "./header/header.container";

const Body = styled.div`
  width: 100%;
  height: 100%;
`;

export interface DarkMode {
  isDark: Boolean;
  toggleDarkMode: () => void;
  children: any;
}

export default function Layout(props: DarkMode) {
  return (
    <div>
      <HeaderContainer
        isDark={props.isDark}
        toggleDarkMode={props.toggleDarkMode}
      />
      <Body>{props.children}</Body>
      <FooterContainer />
    </div>
  );
}
