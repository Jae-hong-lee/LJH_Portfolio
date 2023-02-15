import { css } from "@emotion/react";

export const globalStyles = (theme: any) => css`
  html {
    /* 스크롤 액션 */
    scroll-behavior: smooth;
  }
  body {
    /* 구글 폰트 적용 */
    /* theme = 다크모드 */
    color: ${theme.text};
    background: ${theme.background};
    padding: 0;
    margin: 0;
    font-weight: 500;
    font-family: "googlefonts";
    src: url(/common/fonts/NotoSansKR-Bold.ttf);
  }
  * {
    box-sizing: border-box;
  }
`;
