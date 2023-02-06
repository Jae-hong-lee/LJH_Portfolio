import Head from "next/head";
import CareerPage from "./career";
import ContactPage from "./contact";
import MainHomePage from "./home";
import ProjectPage from "./project";
import SkillPage from "./skill";

export default function Home() {
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
