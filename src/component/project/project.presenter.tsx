import { Card, Col, Divider, Row } from "antd";
import * as PS from "./project.styles";

export default function ProjectUI(props: any) {
  console.log("UI 페이지", props.projects);
  // return <></>;
  return (
    <PS.Wrapper>
      <Divider orientation="center">
        <PS.Projectlength>
          총 프로젝트 :{" "}
          {/* <PS.ProjectNum>{props.projects.results.length}</PS.ProjectNum> */}
        </PS.Projectlength>
      </Divider>

      {/* Grid Card Box */}
    </PS.Wrapper>
  );
}
