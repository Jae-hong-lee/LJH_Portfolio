import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  padding: 0px 30px;
  @media screen and (max-width: 767px) {
    height: 100%;
    margin-top: 50px;
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
  line-height: 140%;
  text-align: left;
`;

export const TitleHeader = styled.h1`
  color: #845ec2;
  font-weight: 700;
  transition-duration: 0.5s;
  &:hover {
    font-size: 36px;
    transform: scale(1);
  }
`;

export const TitleSubHeader = styled.h3`
  width: 22.5ch;
  white-space: nowrap;
  overflow: hidden;
  transition: 0.5s;

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
`;

export const ProfileContent = styled.p`
  line-height: 130%;
  text-align: left;
`;

export const ProfileImg = styled.div`
  background-color: gray;
  max-width: 100%;
  width: 40%;
  height: 60%;
  margin: 30px;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
