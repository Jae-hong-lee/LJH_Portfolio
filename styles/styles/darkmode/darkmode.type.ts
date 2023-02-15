import "@emotion/react";

declare module "@emotion/react" {
  export interface theme {
    text: string;
    subtext: string;
    background: string;
    footerBG: string;
    cardBG: string;
    borderBottom: string;
    boxShadow: string;
  }
}
