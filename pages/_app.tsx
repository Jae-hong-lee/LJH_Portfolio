import React, { useState } from "react";
import { RecoilRoot } from "recoil";
import Layout from "../src/common/layout";
import { AppProps } from "next/app";
import { Global, ThemeProvider } from "@emotion/react";
import { globalStyles } from "../styles/styles/styles/globalStyles";
import { darkTheme, lightTheme } from "../styles/styles/darkmode/darkmode";

function MyApp({ Component, pageProps }: AppProps) {
  // recoil 로 변경하는게 효율적으로 보임 = 다크모드
  const [isDark, setIsDark] = useState<Boolean>(false);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <RecoilRoot>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <Global styles={globalStyles} />
        <Layout isDark={isDark} toggleDarkMode={toggleDarkMode}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
