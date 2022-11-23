import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Koenaku(こえなく)</title>
        <meta name="description" content="Koenaku(こえなく)がまったり更新中" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="topheader">
        <h1>
          Koenaku <span>こえなく</span>
        </h1>
      </div>
    </>
  );
}
