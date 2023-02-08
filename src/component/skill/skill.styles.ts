import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: grid;
  width: 90%;
  padding: 2rem;
  place-items: center;
  background-color: coral;
  border: 1px solid black;
  border-radius: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 1s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const SkillBarWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: cornsilk;
  padding: 3rem 4rem;
`;

export const BarWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  margin: 20px 0px;
  &:first-child {
    margin-top: 0px;
  }
`;

export const InfoWrapper = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
`;

export const InfoIMG = styled.img`
  width: 50px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const InfoTitle = styled.span`
  font-size: 17px;
  font-weight: 700;
  opacity: 0;
  animation: showText 1.5s 1s linear forwards;
  @keyframes showText {
    100% {
      opacity: 1;
    }
  }
`;

export const Progresline = styled.div`
  height: 10px;
  width: 70%;
  background: #f0f0f0;
  position: relative;
  transform: scaleX(0);
  transform-origin: left;
  border-radius: 10px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05),
    0 1px rgba(255, 255, 255, 0.8);
  animation: animate 1s cubic-bezier(1, 0, 0.5, 1) forwards;
  @keyframes animate {
    100% {
      transform: scaleX(1);
    }
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const ProgreslineBar = styled.span`
  width: 90%;
  /* width 로 bar 조절 */
  height: 100%;
  position: absolute;
  border-radius: 10px;
  transform: scaleX(0);
  transform-origin: left;
  background: #c493ff;
  animation: animate 1.5s 1s cubic-bezier(1, 0, 0.5, 1) forwards;

  @keyframes showText2 {
    100% {
      opacity: 1;
    }
  }
  ::before {
    position: absolute;
    content: "";
    top: -10px;
    right: 0;
    height: 0;
    width: 0;
    border: 7px solid transparent;
    border-bottom-width: 0px;
    border-right-width: 0px;
    border-top-color: #000;
    opacity: 0;
    animation: showText2 0.5s 1.5s linear forwards;
  }

  ::after {
    content: "90%";
    position: absolute;
    top: -23px;
    right: 0;
    font-weight: 500;
    background: #000;
    color: #fff;
    padding: 1px 8px;
    font-size: 12px;
    border-radius: 3px;
    opacity: 0;
    animation: showText2 0.5s 1.5s linear forwards;
  }
`;
