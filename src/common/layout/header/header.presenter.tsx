import { Button } from "antd";
import { useRouter } from "next/router";
import * as HS from "./header.styles";

export default function HeaderPresenter() {
  const LinkData = ["about", "skills", "projects", "contact"];
  const router = useRouter();

  return (
    <HS.HeaderWrapper>
      <HS.Logo href="#home">👨‍💻 JaeHong</HS.Logo>
      <HS.Navbar>
        <HS.NavText href="#home" id="home" isPosition="#home">
          home
        </HS.NavText>
        {LinkData.map((el, idx) => {
          return (
            <HS.NavbarMenu key={idx}>
              <HS.NavText
                href={`#${el}`}
                id={`${el}`}
                isPosition={`${router.asPath.split("/")[1]}`}
              >
                {el}
              </HS.NavText>
            </HS.NavbarMenu>
          );
        })}

        <Button>버튼</Button>
      </HS.Navbar>
    </HS.HeaderWrapper>
  );
}
