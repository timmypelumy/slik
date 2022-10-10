import Head from "next/head";
import Slik from "../components/Slik";
import { useEffect, useState } from "react";
import HomeComponent from "../components/Home";

const Home = () => {
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    let tId = setTimeout(() => {
      setShowPage(true);
    }, 2000);

    return () => {
      clearTimeout(tId);
    };
  }, []);

  return (
    <div className=" min-h-screen bg-main-bg  ">
      <Head>
        <title> Slik | Home </title>
        <link rel="icon" href="/assets/slik-favicon-transparent-web.png" />
        <link rel="shortcut icon" href="Slik-Logo-horizontal-web.png" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/qhf4ufm.css"
        ></link>
      </Head>
      <main className="w-full min-h-screen  ">
        {showPage ? <HomeComponent /> : <Slik />}
      </main>
    </div>
  );
};

export default Home;
