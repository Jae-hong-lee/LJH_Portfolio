import "../styles/globals.css";
import React from "react";
import { RecoilRoot } from "recoil";
import Layout from "../src/common/layout";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
