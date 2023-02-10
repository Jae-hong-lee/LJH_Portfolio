import { Button } from "antd";
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

        <Button>버튼</Button>
      </HS.Navbar>
    </HS.HeaderWrapper>
  );
}
