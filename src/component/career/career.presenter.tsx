import React from "react";
import * as CS from "./career.styles";

interface educationType {
  title: string;
  date: string;
  desc: string[];
  src: string;
  width: string;
  height: string;
}

const education: educationType[] = [
  {
    title: "김포대학교 소프트웨어과",
    date: "16.03 ~ 21.02. 컴퓨터 소프트웨어과",
    desc: [
      "소프트웨어 개발자를 위한 심화과정",
      "디지털 콘텐츠 개발자를 위한 심화과정",
      "Java, Spring, Android Studio 통한 앱, 웹 개발 학습 및 구현",
      "HTML, CSS, JavaScript에 대한 기초 및 이론 학습진행",
      "졸업작품으로 JAVA 기반 SNS 앱 프로젝트 진행",
    ],
    src: `/career.img/김포대학교.svg`,
    width: "150px",
    height: "150px",
  },
  {
    title: "알고리즘 스터디",
    date: "21.06 ~ 22.08. 스터디",
    desc: [
      "알고리즘 문제 해결 능력을 기르고자 친구들과 알고리즘 공부를 6월부터 꾸준히 진행 중",
      "스터디를 통한 Python 기본 문법 및 JavaScript 기본 문법 학습",
      "리트코드, 백준, 프로그래머스 등 여러사이트를 통해 알고리즘 해결 능력을 기르고 있습니다.",
    ],
    src: `/career.img/Algorithm.png`,
    width: "150px",
    height: "150px",
  },
  {
    title: "코드캠프 (Code.camp)",
    date: "22.05 ~ 22.08. 프론트엔드 과정",
    desc: [
      "프론트엔드 개발에 대한 HTML, CSS, JavaScript, React 지식 학습",
      "React기반 올어바웃 게시판 초급 과정 실습 솔로 프로젝트 경험 (BeerMarket 프로젝트)",
      "웹 배포에 대한 이해 및 실습 (클라우드,네트워크,도메인)",
      "팀 프로젝트로 백엔드, 프론트엔드 간의 협업 개발 경험 (Shaki 프로젝트)",
      "페어 프로그래밍, 1번의 협업 프로젝트 진행",
    ],
    src: `/career.img/codecamp.logo.png`,
    width: "150px",
    height: "60px",
  },
];

export default function CareerContainer() {
  return (
    <>
      {education.map((el, idx: number) => {
        return (
          <CS.CardContainer key={idx}>
            <CS.CardContent>
              <CS.ImgDiv>
                <CS.EduImg
                  src={el.src}
                  width={el.width}
                  height={el.height}
                  alt={`${el.title} 로고`}
                />
              </CS.ImgDiv>
              <CS.Content>
                <CS.TitleWrapper>
                  <CS.AboutTitle>{el.title}</CS.AboutTitle>
                  <CS.Date>{el.date}</CS.Date>
                </CS.TitleWrapper>
                {el.desc.map((desc) => {
                  return <CS.Li key={idx}>{desc}</CS.Li>;
                })}
              </CS.Content>
            </CS.CardContent>
          </CS.CardContainer>
        );
      })}
    </>
  );
}
