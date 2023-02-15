import { theme } from "@emotion/react";

export const lightTheme: theme = {
  text: "#000",
  subtext: "#000",
  background: "#fff",
  footerBG: "#e5e7eb",
  cardBG: "#fff",
  borderBottom: "4px solid black",
  boxShadow:
    "0 14px 28px rgba(0, 0, 0, 0.25), 0 14px 28px rgba(0, 0, 0, 0.22);",
};

export const darkTheme: theme = {
  text: "#fff",
  subtext: "#94a3b8",
  background: "#1E313B",
  footerBG: "#17242B",
  cardBG: "#34404E",
  borderBottom: "4px solid white",
  boxShadow: "0px 0px 10px 1px #FFF",
};

// before
// "#1E313B"

// after
// #4B4453

// ex) color: ${(props: any) => props.theme.subtext};
