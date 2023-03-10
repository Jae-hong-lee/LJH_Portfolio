import styled from "@emotion/styled";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  animation: scale-up-ver-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  @keyframes scale-up-ver-center {
    0% {
      transform: scaleY(0.4);
    }
    100% {
      transform: scaleY(1);
    }
  }
  margin-bottom: 1rem;
`;

export const CardContent = styled.div`
  display: flex;
  width: 80%;
  padding: 1rem;
  transition-duration: 0.5s;
  @media (max-width: 992px) {
    width: 100%;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 0px 1rem;
  }
  &:hover {
    box-shadow: ${(props: any) => props.theme.boxShadow};
  }
`;

export const ImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  margin: 0 2rem;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const EduImg = styled.img``;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AboutTitle = styled.h2`
  text-align: left;
`;

export const Date = styled.span``;

export const Li = styled.li`
  color: ${(props: any) => props.theme.subtext};
  text-align: left;
  list-style: disc;
  list-style-position: inside;
  margin: 0.2rem 0;
  line-height: 1.2rem;
  text-indent: -20px;
  padding-left: 20px;
`;
