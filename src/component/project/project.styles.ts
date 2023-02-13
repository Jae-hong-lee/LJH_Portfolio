import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`;

export const Projectlength = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

export const ProjectNum = styled.span`
  font-weight: 500;
`;

export const ProjectCard = styled.div`
  background-color: cornflowerblue;
`;
