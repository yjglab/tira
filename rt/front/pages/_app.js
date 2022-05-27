import React from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import Head from "next/head";

import wrapper from "../store/configureStore";
// pages 파일들 중 공통부분 처리
const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>TIRA</title>
      </Head>
      <Component />
    </>
  );
};
App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};
export default wrapper.withRedux(App);
