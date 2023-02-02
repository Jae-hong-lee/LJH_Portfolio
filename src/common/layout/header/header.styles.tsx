import styled from "@emotion/styled";

interface IPage {
  id: string;
  isPosition: string;
}

export const HeaderWrapper = styled.div`
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
`;

export const Logo = styled.a`
  font-size: 30px;
  font-weight: 600;
`;

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NavbarMenu = styled.li`
  list-style: none;
  /* margin-right: 15px; */
`;

export const NavText = styled.a`
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 20px;
  margin-right: 15px;

  color: ${(props: IPage) =>
    props.id === props.isPosition ? " #845EC2" : "#808080"};
  border-bottom: ${(props: IPage) =>
    props.id === props.isPosition ? "3px solid #845EC2" : "none"};

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: #845ec2;
    border-bottom: 3px solid #845ec2;
    font-size: 25px;
  }
  :focus {
    color: #845ec2;
    font-size: 25px;
  }
`;
