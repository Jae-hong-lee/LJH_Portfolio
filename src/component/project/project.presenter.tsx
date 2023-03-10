import { Col, Divider, Row, Tag } from "antd";
import * as PS from "./project.styles";

export default function ProjectUI(props: any) {
  return (
    <PS.Wrapper>
      <Divider orientation="center">
        <PS.Projectlength>
          총 프로젝트 :{" "}
          {props.projects && (
            <PS.ProjectNum>{props.projects.results?.length}</PS.ProjectNum>
          )}
        </PS.Projectlength>
      </Divider>

      {/* xs : 모바일, sm : 태플릿, md : 노트북, lg : 데스크탑 */}
      {/* Grid Card Box */}
      {props.projects && (
        <PS.ProjectCard>
          <Row gutter={[16, 16]}>
            {props.projects.results?.map((el: any, idx: number) => (
              <Col xs={24} sm={12} md={12} lg={12} key={`Grid${idx}`}>
                {/* 링크 설정 */}
                {/* 이미지 크기조정 및 컨텐츠 작성 */}
                <PS.CardTest
                  title={`${el.properties.이름.title[0].plain_text}`}
                  extra={<a href={el.url}>더 보기</a>}
                  cover={
                    <PS.ProjectTitleIMG
                      alt="cover image"
                      src={el.cover.external.url}
                    />
                  }
                >
                  <PS.ProjectIntro>
                    {el.properties.프로젝트소개.rich_text[0].plain_text}
                  </PS.ProjectIntro>
                  <PS.ProjectContant>
                    진행기간: {el.properties.진행기간.date.start}~
                    {el.properties.진행기간.date.end}
                    <br />
                    <PS.ProjectLink href={el.properties.GitHub.url}>
                      깃허브 바로가기
                    </PS.ProjectLink>
                    <br />
                    {el.properties.Deploy.rich_text[0] ? (
                      <PS.ProjectLink
                        href={el.properties.Deploy.rich_text[0].plain_text}
                      >
                        배포사이트 바로가기
                      </PS.ProjectLink>
                    ) : (
                      <br />
                    )}
                  </PS.ProjectContant>
                  <PS.ProjectStacks>
                    <PS.StackTitle>사용스택</PS.StackTitle>
                    <Row key={`stack${idx}`}>
                      {el.properties.사용스택.multi_select.map(
                        (el: any, idx: number) => (
                          <Col
                            xs={12}
                            sm={12}
                            md={8}
                            lg={6}
                            key={`Stack${idx}`}
                          >
                            <Tag color="geekblue">{el.name}</Tag>
                          </Col>
                        )
                      )}
                    </Row>
                  </PS.ProjectStacks>
                </PS.CardTest>
              </Col>
            ))}
          </Row>
        </PS.ProjectCard>
      )}
    </PS.Wrapper>
  );
}
