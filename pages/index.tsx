import Head from "next/head";
import { DATABASE_ID, TOKEN } from "../config";
import CareerPage from "./career";
import MainHomePage from "./home";
import ProjectPage from "./project";
import SkillPage from "./skill";

export default function Home({ projects }: { projects: any }) {
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
      {/* getStaticProps 로 받은 노션 API props로 내려줌 */}
      <ProjectPage projects={projects} />
    </div>
  );
}

// pages 폴더에서 getStaticProps 사용하기,
// 폴더에서 사용 안되는 이유: pages 폴더는 router를 담당하는 곳,
// 폴더 혹은 파일 이름만 지정해서 함수를 만들면 그에 해당하는 router가 자동으로 지정됩니다.
// https://velog.io/@taeung/Next.js-getStaticProps-%EC%82%AC%EC%9A%A9%EA%B8%B0

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

  return {
    props: { projects },
    // fallback: true,
    // getStaticProps() 메소드를 사용한다면 revalidate 로 데이터 변경시 갱신가능!
    // revalidate: 1 // 데이터 변경이 있으면 갱신 1초 마다
  };
}
