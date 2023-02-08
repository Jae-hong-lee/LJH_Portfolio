import styled from "@emotion/styled";

export interface IBar {
  bar: string;
}

export const Wrapper = styled.div`
  overflow: hidden;
  display: grid;
  width: 80%;
  padding: 2rem;
  place-items: center;
  border: 1px solid black;
  border-radius: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 1s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 14px 28px rgba(0, 0, 0, 0.22);
  }
  @media screen and (max-width: 767px) {
    padding: 1rem;
    width: 100%;
  }
`;

export const SkillBarWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem 3rem;
  @media screen and (max-width: 767px) {
    padding: 1rem;
  }
`;

export const SkillTitle = styled.div`
  width: 100%;
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 700;
  cursor: pointer;
`;

export const Line = styled.div`
  width: 100%;
  border-bottom: 2px dashed black;
`;

export const BarWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 20px 0px;
  &:first-child {
    margin-top: 0px;
  }
  &:last-child {
    margin-bottom: 0px;
  }
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
`;

export const InfoWrapper = styled.div`
  width: 35%;
  display: flex;
  gap: 10px;
  align-items: center;
  transition-duration: 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const InfoIMG = styled.img`
  height: auto;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const InfoTitle = styled.span`
  font-size: 17px;
  font-weight: 700;
  opacity: 0;
  animation: showText 1s 1s linear forwards;
  text-align: center;
  @keyframes showText {
    100% {
      opacity: 1;
    }
  }
`;

export const Progresline = styled.div`
  height: 10px;
  width: 60%;
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
  width: ${(props: IBar) => props.bar};
  height: 100%;
  position: absolute;
  border-radius: 10px;
  transform: scaleX(0);
  transform-origin: left;
  background: #c493ff;
  animation: animate 1.5s 1s cubic-bezier(1, 0, 0.5, 1) forwards;

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
    content: attr(id);
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

  @keyframes showText2 {
    100% {
      opacity: 1;
    }
  }
`;

export const ETCWrapper = styled.div`
  padding-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  @media screen and (max-width: 767px) {
    padding-top: 1rem;
  }
`;

export const ETCBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transition-duration: 0.5s;
  &:hover {
    transform: scale(1.2);
  }
`;
