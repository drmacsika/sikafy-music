import Head from 'next/head';
import React from 'react';
import SideBar from '../components/SideBar';
import Main from '../components/Main';

const Home: React.FC = () => {
  return (
    <>
      <div className="bg-black h-screen overflow-hidden">
        <Head>
          <title>Sikafy Music: Music on the fly.</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className='flex'>
          <SideBar />
          <Main />
        </main>

        <footer className="flex">
          
        </footer>
      </div>
    </>
  );
}

export default Home;
