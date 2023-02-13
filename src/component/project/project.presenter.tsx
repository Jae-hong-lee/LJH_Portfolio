import { Card, Col, Divider, Row } from "antd";
import * as PS from "./project.styles";

export default function ProjectUI(props: any) {
  // console.log("UI 페이지", props.projects.results);

  return (
    <PS.Wrapper>
      <Divider orientation="center">
        <PS.Projectlength>
          총 프로젝트 :{" "}
          <PS.ProjectNum>{props.projects.result?.length}</PS.ProjectNum>
        </PS.Projectlength>
      </Divider>

      {/* Grid Card Box */}
      <PS.ProjectCard>
        <Row gutter={[16, 24]}>
          {props.projects.results?.map((el: any, idx: number) => (
            <Col xs={24} md={12} key={`Grid${idx}`}>
              {/* 링크 설정 */}
              {/* 이미지 크기조정 및 컨텐츠 작성 */}
              <Card
                hoverable
                title={`${el.properties.이름.title[0].plain_text}`}
                extra={
                  <a href="#" target="_blank">
                    More
                  </a>
                }
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
              >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
          ))}
        </Row>
      </PS.ProjectCard>
    </PS.Wrapper>
  );
}

// {props.projects?.results.map(
//   (el: any) => el.properties.이름.title[0].plain_text,
//   `vm`
// )}
