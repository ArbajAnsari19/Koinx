// App.js
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Sidebar from './Components/Sidebar';
import Trending from './Components/Trending';
import Info from './Components/Info';
import Overview from './Components/Overview';
import Carousel from './Components/Carousel';
import Sentiment from './Components/Sentiment';
import Tokenomics from './Components/Tokenomics';
import Team from './Components/Team';
import Youmaysec from './Components/Youmaysec';
import Aboutcoin from './Components/Aboutcoin';
import Herotitle from './Components/Herotitle';

function App() {
  return (
    <>
      <div className='Page'>
        <Navbar />
        <div className="main">
          <div className="scrollable-section">
            <Herotitle/>
            <Hero />
            <Info />
            <Overview cryptoKey="bitcoin" />
            <Sentiment />
            <Aboutcoin />
            <Tokenomics />
            <Team />
          </div>
          <div className="non-scrollable-section">
            <Sidebar />
            <Trending />
          </div>
        </div>
        <Youmaysec />
      </div>
    </>
  );
}

export default App;
