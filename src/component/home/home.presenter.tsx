import ProfileAni from "../../common/lottie_animation/profile_animaition";
import * as HS from "./home.styles";

export default function HomeUI() {
  return (
    <HS.Wrapper>
      <HS.ProfileContentBox>
        <HS.ProfileTitle>
          <HS.TitleHeader>Let’s make things better!</HS.TitleHeader>
          <HS.TitleSubHeader>
            FrontEnd Engineer, 이재홍 입니다.
          </HS.TitleSubHeader>
        </HS.ProfileTitle>

        <HS.ProfileMainText>
          <b>
            완벽한 것은 존재하지 않다고 생각하기에 개선 요소를 찾으려고 노력하는
            신입 프론트엔드 개발자 이재홍입니다.
          </b>
          <br />
          <b>React</b> ,<b>Emotion</b>, <b>Next.js</b>, <b>GrapgQL</b> ,{" "}
          <b>AWS</b> , <b>Docker</b> 를 이용하여 웹 개발, 배포 경험이 있습니다.{" "}
        </HS.ProfileMainText>
        <HS.ProfileContent>
          <br />
          대학생 때 HTML과 CSS를 접할 기회가 생겼고, 단 몇 줄의 코드로 바로바로
          나의 사이트에 적용되는 것을 보고 다른 이쁘고, 깔끔한 사이트들을 보며
          내 손으로 무엇인가를 만들 수 있고, 그 범위가 무궁무진하다는 것,
          무엇보다 제 흥미를 이끌었다는 점이 프론트엔드 개발자가 되겠다는 꿈을
          가지게 되었습니다.
          <br />
          <br />
          심화적인 내용을 학습하고 싶어 3개월간 진행된 코드캠프 프론트엔드
          과정을 수료했습니다.
          <br /> 수료 이후 부트캠프에서 다루었던 프로젝트 리펙토링을 위한
          Docker, Firebase ,Next.js , AWS , Typescript 를 공부하고 있으며, 수료
          이후 성장하기 위해 수료생들과의 스터디&토이 프로젝트를 진행하고
          있습니다.
        </HS.ProfileContent>
      </HS.ProfileContentBox>

      <HS.ProfileImg>
        <ProfileAni />
      </HS.ProfileImg>
    </HS.Wrapper>
  );
}
