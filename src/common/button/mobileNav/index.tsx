import styled from "@emotion/styled";
import { useState } from "react";

const Wrapper = styled.div`
  width: 100%;
`;

const MobileMenuBtn = styled.button`
  border-radius: 50%;
  background-color: #f3f4f6;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  transition: 0.25s;
  &:hover {
    background: gray;
  }
`;

const MobileMenuBox = styled.div`
  margin-bottom: 0.5rem;
  width: 100%;
`;

const NavbarMenu = styled.li`
  list-style: none;
`;
const NavText = styled.a`
  text-decoration: none;
  font-weight: 600;
  font-size: 1.3rem;
  color: #808080;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: #845ec2;
  }
  :focus {
    color: #845ec2;
  }
`;
export default function MobileNavbar(props: any) {
  const [toggleMenu, setTogglemenu] = useState(false);

  const onClickToggle = () => {
    setTogglemenu((prev) => !prev);
  };
  return (
    <Wrapper onClick={onClickToggle}>
      {toggleMenu ? (
        <MobileMenuBox>
          <NavText href="#home">home</NavText>
          {props.LinkData.map((el: String, idx: Number) => {
            return (
              <NavbarMenu key={idx + "MobileMenu"}>
                <NavText href={`#${el}`}>{el}</NavText>
              </NavbarMenu>
            );
          })}
          <NavText href="https://open.kakao.com/o/sZFvNs4e">contact</NavText>
        </MobileMenuBox>
      ) : (
        <MobileMenuBtn>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clip-rule="evenodd"
            />
          </svg>
        </MobileMenuBtn>
      )}
    </Wrapper>
  );
}
