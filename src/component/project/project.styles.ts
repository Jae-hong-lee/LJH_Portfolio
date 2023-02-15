import styled from "@emotion/styled";
import { Card } from "antd";

export const CardTest = styled(Card)`
  border: none;
  .ant-card-head {
    background: ${(props: any) => props.theme.cardBG};
    color: ${(props: any) => props.theme.text};
  }
  background-color: ${(props: any) => props.theme.cardBG};
  color: ${(props: any) => props.theme.text};

  &:hover {
    box-shadow: ${(props: any) => props.theme.boxShadow};
  }
`;

export const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`;

export const Loading = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  font-weight: 600;
`;

export const Projectlength = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props: any) => props.theme.subtext};
`;

export const ProjectNum = styled.span`
  font-weight: 500;
`;

export const ProjectCard = styled.div``;

export const ProjectTitleIMG = styled.img`
  height: 15rem;
  @media (max-width: 768px) {
    height: 15rem;
  }
  @media (min-width: 992px) {
    height: 200px;
  }
  @media (min-width: 1200px) {
    height: 20rem;
  }
`;

export const ProjectIntro = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.5rem;
`;

export const ProjectContant = styled.div`
  font-size: 1rem;
  color: #94a3b8;
`;

export const StackTitle = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;

export const ProjectStacks = styled.div`
  margin: 0.5rem 0px;
  border-top: 1px dashed black;
`;
