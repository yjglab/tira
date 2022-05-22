import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import PeerList from "../components/PeerList";

const Profile = () => {
  const peersList = [
    { nickname: "티라Official" },
    { nickname: "티라미" },
    { nickname: "티라노" },
    { nickname: "티라누" },
  ];
  const peeringsList = [
    { nickname: "더미1" },
    { nickname: "더미2" },
    { nickname: "더미3" },
    { nickname: "더미4" },
  ];
  return (
    <>
      <Head>
        <title>내 정보 | TIRA</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <PeerList header="피어링 목록" data={peeringsList} />
        <PeerList header="피어 목록" data={peersList} />
      </AppLayout>
    </>
  );
};

export default Profile;
