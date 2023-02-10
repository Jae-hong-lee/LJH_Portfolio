import DarkModeButton from "../../button/darkmode";
import * as HS from "./header.styles";

export default function HeaderPresenter() {
  const LinkData = ["career", "skill", "projects", "contact"];

  return (
    <HS.HeaderWrapper>
      <HS.Logo href="#home">👨‍💻 JaeHong</HS.Logo>
      <HS.Navbar>
        <HS.NavText href="#home">home</HS.NavText>
        {LinkData.map((el, idx) => {
          return (
            <HS.NavbarMenu key={idx + "n"}>
              <HS.NavText href={`#${el}`}>{el}</HS.NavText>
            </HS.NavbarMenu>
          );
        })}
        {/* 다크모드 버튼 작업 */}
        <DarkModeButton />
      </HS.Navbar>
    </HS.HeaderWrapper>
  );
}
