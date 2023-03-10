import DarkModeButton from "../../button/darkmode";
import MobileNavbar from "../../button/mobileNav";
import { IDarkMode } from "./header.container";
import * as HS from "./header.styles";

export default function HeaderPresenter(props: IDarkMode) {
  const LinkData = ["career", "skill", "project"];

  return (
    <HS.HeaderWrapper>
      <HS.Logo href="#home">π¨βπ» JaeHong</HS.Logo>
      <HS.Navbar>
        <HS.NavText href="#home">home</HS.NavText>
        {LinkData.map((el, idx) => {
          return (
            <HS.NavbarMenu key={idx + "n"}>
              <HS.NavText href={`#${el}`}>{el}</HS.NavText>
            </HS.NavbarMenu>
          );
        })}
        {/* Contact 1:1 μΉ΄μΉ΄μ€ν‘ μ€νμ±ν */}
        <HS.NavText href="https://open.kakao.com/o/sZFvNs4e">
          contact
        </HS.NavText>
        {/* νλ²κ±° λ©λ΄ */}
        <HS.TestMenu>
          <MobileNavbar LinkData={LinkData} />
        </HS.TestMenu>
        {/* λ€ν¬λͺ¨λ λ²νΌ μμ */}
        <DarkModeButton
          isDark={props.isDark}
          toggleDarkMode={props.toggleDarkMode}
        />
      </HS.Navbar>
    </HS.HeaderWrapper>
  );
}
