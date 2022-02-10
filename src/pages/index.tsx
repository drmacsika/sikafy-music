import Head from 'next/head';
import React from 'react';
import SideBar from '../components/SideBar';

const Home: React.FC = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
          <title>Sikafy Music: Music on the fly.</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex w-full flex-1">
          <SideBar />
          
        </main>

        <footer className="flex">
          
        </footer>
      </div>
    </>
  );
}

export default Home;
