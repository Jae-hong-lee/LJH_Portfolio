import { Button } from "antd";
import { useState } from "react";
import * as HS from "./header.styles";

export default function HeaderPresenter() {
  const LinkData = ["career", "skill", "projects", "contact"];
  const [Address, setAddress] = useState("");

  return (
    <HS.HeaderWrapper>
      <HS.Logo href="#home" onClick={() => setAddress("home")}>
        👨‍💻 JaeHong
      </HS.Logo>
      <HS.Navbar>
        <HS.NavText
          href="#home"
          isPosition={`home`}
          onClick={() => setAddress("home")}
          Address={Address}
        >
          home
        </HS.NavText>
        {LinkData.map((el, idx) => {
          return (
            <HS.NavbarMenu key={idx + "n"}>
              <HS.NavText
                href={`#${el}`}
                isPosition={`${el}`}
                onClick={() => setAddress(el)}
                Address={Address}
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
