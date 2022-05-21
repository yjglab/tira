import Head from "next/head";
import React from "react";
import AppLayout from "../components/AppLayout";

const Home = () => {
  return (
    <>
      <Head>
        <title>홈 | TIRA</title>
      </Head>
      <AppLayout>
        <div>홈</div>
      </AppLayout>
    </>
  );
};

export default Home;
