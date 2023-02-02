import styled from "@emotion/styled";

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 120px;
  padding: 0px 50px;
  background-color: #dfedf4;
`;

export const FooterTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

export const FooterSubTitle = styled.div`
  font-size: 14px;
`;

export const LinkWrapper = styled.span`
  width: 13%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const LinkBox = styled.a`
  cursor: pointer;
`;
