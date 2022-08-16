import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";

const Home = () => {
  const { me } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  return (
    <>
      <Head>
        <title>Menu | TIRA</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/@kfonts/nexon-lv2-gothic/index.css"
        />
      </Head>
      <AppLayout></AppLayout>
    </>
  );
};

export default Home;
