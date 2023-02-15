import DarkModeButton from "../../button/darkmode";
import * as HS from "./header.styles";

export default function HeaderPresenter() {
  const LinkData = ["career", "skill", "project"];

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
        {/* Contact 1:1 카카오톡 오픈채팅 */}
        <HS.NavText href="https://open.kakao.com/o/sZFvNs4e">
          contact
        </HS.NavText>
        {/* 다크모드 버튼 작업 */}
        <DarkModeButton />
      </HS.Navbar>
    </HS.HeaderWrapper>
  );
}
