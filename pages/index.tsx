import Head from "next/head";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { DATABASE_ID, TOKEN } from "../config";
import { projectNamesState } from "../src/common/store";
import CareerPage from "./career";
import ContactPage from "./contact";
import MainHomePage from "./home";
import ProjectPage from "./project";
import SkillPage from "./skill";

export default function Home(props: any) {
  // recoil 을 통해 전역변수로 props 저장 후 ProjectPage에서 활용
  const [, setProjectNames] = useRecoilState(projectNamesState);

  useEffect(() => {
    setProjectNames(props.projectNames);
  }, []);

  return (
    <div>
      <Head>
        <title>재홍 포트폴리오</title>
        <meta name="description" content="portfolio site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHomePage />
      <CareerPage />
      <SkillPage />
      <ProjectPage />
      <ContactPage />
    </div>
  );
}

export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-02-22",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    // 이름순 정렬, created_time 으로 시간순 정렬 가능
    body: JSON.stringify({
      sorts: [
        {
          property: "이름",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();

  const projectNames = projects.results.map(
    (el: any) => el.properties.이름.title[0].plain_text
  );

  const Aproject = projects.results.map((el: any) => el.properties);

  console.log(`projectNames : ${projectNames}`);

  return {
    props: { projectNames, Aproject },
    // getStaticProps() 메소드를 사용한다면 revalidate 로 데이터 변경시 갱신가능!
    // revalidate: 1 // 데이터 변경이 있으면 갱신 1초 마다
  };
}
