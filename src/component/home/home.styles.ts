import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  padding: 0px 5rem;
  @media screen and (max-width: 850px) {
    height: 100%;
  }
  @media screen and (max-width: 767px) {
    height: 100%;
    padding: 0px 1rem;
  }
  animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  @keyframes scale-up-center {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const ProfileContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const ProfileTitle = styled.div`
  text-align: left;
`;

export const TitleHeader = styled.h1`
  color: #845ec2;
  line-height: 100%;
  font-weight: 700;
  transition: 0.5s;
  &:hover {
    animation: shake-horizontal 1s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    @keyframes shake-horizontal {
      0%,
      100% {
        transform: translateX(0);
      }
      10%,
      30%,
      50%,
      70% {
        transform: translateX(-10px);
      }
      20%,
      40%,
      60% {
        transform: translateX(10px);
      }
      80% {
        transform: translateX(8px);
      }
      90% {
        transform: translateX(-8px);
      }
    }
  }
`;

export const TitleSubHeader = styled.h2`
  width: 100%;
  transition: 0.5s;
`;

export const ProfileMainText = styled.span`
  transition: 0.5em;
`;

export const ProfileContent = styled.p`
  color: ${(props: any) => props.theme.subtext};
  /* color: #94a3b8; */
  line-height: 130%;
  text-align: left;
  transition: 0.5s;
`;

export const ProfileImg = styled.div`
  max-width: 100%;
  width: 40%;
  height: 60%;
  margin: 30px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
