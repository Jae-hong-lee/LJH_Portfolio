import * as SS from "./skill.styles";

export default function SkillUI() {
  return (
    <SS.Wrapper>
      <SS.SkillBarWrapper>
        <SS.BarWrapper>
          <SS.InfoWrapper>
            <SS.InfoTitle>JavaScript</SS.InfoTitle>
          </SS.InfoWrapper>
          <SS.Progresline>
            <SS.ProgreslineBar></SS.ProgreslineBar>
          </SS.Progresline>
        </SS.BarWrapper>
        <SS.BarWrapper>
          <SS.InfoWrapper>
            <SS.InfoTitle>TypeScript</SS.InfoTitle>
          </SS.InfoWrapper>
          <SS.Progresline>
            <SS.ProgreslineBar></SS.ProgreslineBar>
          </SS.Progresline>
        </SS.BarWrapper>

        <SS.BarWrapper>
          <SS.InfoWrapper>
            <SS.InfoTitle>React</SS.InfoTitle>
          </SS.InfoWrapper>
          <SS.Progresline>
            <SS.ProgreslineBar></SS.ProgreslineBar>
          </SS.Progresline>
        </SS.BarWrapper>

        <SS.BarWrapper>
          <SS.InfoWrapper>
            <SS.InfoIMG src="/skill/emotion.png" />
            <SS.InfoTitle>
              <SS.InfoTitle>Emotion (styeld-component)</SS.InfoTitle>
            </SS.InfoTitle>
          </SS.InfoWrapper>
          <SS.Progresline>
            <SS.ProgreslineBar></SS.ProgreslineBar>
          </SS.Progresline>
        </SS.BarWrapper>
      </SS.SkillBarWrapper>
    </SS.Wrapper>
  );
}
