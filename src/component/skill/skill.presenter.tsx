import * as SS from "./skill.styles";

interface ISkill {
  title: string;
  src: string;
  width: string;
  bar: string;
}
interface IEtc {
  title: string;
  src: string;
  width: string;
}

const SkillData: ISkill[] = [
  {
    title: "JavaScript",
    src: `/skill/JavaScript.png`,
    width: "50px",
    bar: "100%",
  },
  {
    title: "TypeScript",
    src: `/skill/TypeScript.png`,
    width: "50px",
    bar: "70%",
  },
  {
    title: "React",
    src: `/skill/React.png`,
    width: "50px",
    bar: "100%",
  },
  {
    title: "Recoil",
    src: `/skill/ETC/Recoil.png`,
    width: "50px",
    bar: "100%",
  },
  {
    title: "Graphql & ApolloClient",
    src: `/skill/GraphQL.png`,
    width: "50px",
    bar: "100%",
  },
  {
    title: "Next",
    src: `/skill/Next.png`,
    width: "50px",
    bar: "80%",
  },
  {
    title: "Firebase",
    src: `/skill/ETC/Firebase.png`,
    width: "50px",
    bar: "80%",
  },
];

const DeployEtcData: IEtc[] = [
  {
    title: "Vercel",
    src: `/skill/Deploy/Vercel.png`,
    width: "80px",
  },
  { title: "AWS", src: `/skill/Deploy/AWS.png`, width: "52px" },
  {
    title: "GitHub Action",
    src: `/skill/Deploy/GitHubAction.png`,
    width: "40px",
  },
  {
    title: "Git",
    src: `/skill/ETC/Git.png`,
    width: "70px",
  },
  {
    title: "Notion",
    src: `/skill/ETC/Notion.png`,
    width: "40px",
  },
  {
    title: "Slack",
    src: `/skill/ETC/Slack.png`,
    width: "80px",
  },
];
export default function SkillUI() {
  return (
    <SS.Wrapper>
      <SS.SkillTitle>⭐️ Frontend</SS.SkillTitle>
      <SS.Line />
      <SS.SkillBarWrapper>
        {SkillData.map((el, idx: number) => {
          return (
            <SS.BarWrapper key={idx}>
              <SS.InfoWrapper>
                <SS.InfoIMG src={el.src} style={{ width: el.width }} />
                <SS.InfoTitle> {el.title}</SS.InfoTitle>
              </SS.InfoWrapper>

              <SS.Progresline>
                <SS.ProgreslineBar id={el.bar} bar={el.bar} />
              </SS.Progresline>
            </SS.BarWrapper>
          );
        })}
      </SS.SkillBarWrapper>

      <SS.SkillTitle>📡 Deploy & ETC</SS.SkillTitle>
      <SS.Line />
      <SS.ETCWrapper>
        {DeployEtcData.map((el, idx: number) => {
          return (
            <SS.ETCBox key={idx}>
              <SS.InfoIMG src={el.src} style={{ width: el.width }} />
              <SS.InfoTitle>{el.title}</SS.InfoTitle>
            </SS.ETCBox>
          );
        })}
      </SS.ETCWrapper>
    </SS.Wrapper>
  );
}
