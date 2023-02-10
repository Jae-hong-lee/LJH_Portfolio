import { useRecoilState } from "recoil";
import { projectNamesState } from "../../common/store";
import * as PS from "./project.styles";
import { v1 } from "uuid";

export default function ProjectUI() {
  const [projectNames] = useRecoilState(projectNamesState);
  console.log("전역변수", projectNames);

  return (
    <PS.Wrapper>
      <div>
        {projectNames.map((el, idx) => (
          <div key={v1()}>{el} 입니다.</div>
        ))}{" "}
      </div>
    </PS.Wrapper>
  );
}
