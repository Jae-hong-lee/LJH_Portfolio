import styled from "@emotion/styled";

interface IPage {
  isPosition: string;
  onClick: any;
  Address: string;
}

export const HeaderWrapper = styled.nav`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 70px;
  padding: 0px 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  /* 다크모드 */
  /* https://mycolor.space/?hex=%23845EC2&sub=1 */
  /* background-color: #3c3841;  */
  animation: focus-in-expand 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @keyframes focus-in-expand {
    0% {
      letter-spacing: -0.5em;
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      filter: blur(0px);
      opacity: 1;
    }
  }
`;

export const Logo = styled.a`
  font-size: 30px;
  font-weight: 600;
`;

export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NavbarMenu = styled.li`
  list-style: none;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const NavText = styled.a`
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 20px;
  margin-right: 15px;
  color: #808080;
  cursor: pointer;
  transition: 0.2s;

  color: #808080;

  &:hover {
    color: #845ec2;
    border-bottom: 3px solid #845ec2;
    font-size: 25px;
  }
  :focus {
    color: #845ec2;
    font-size: 25px;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
