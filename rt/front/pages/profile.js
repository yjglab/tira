import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import PeerList from "../components/PeerList";
import { useSelector } from "react-redux";

const Profile = () => {
  const { me } = useSelector((state) => state.user);
  return (
    <>
      <Head>
        <title>내 정보 | TIRA</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <PeerList header="피어링 목록" data={me.Peerings} />
        <PeerList header="피어 목록" data={me.Peers} />
      </AppLayout>
    </>
  );
};

export default Profile;
