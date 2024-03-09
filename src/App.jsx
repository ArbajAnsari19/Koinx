// App.js
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Sidebar from './Components/Sidebar';
import Trending from './Components/Trending';
import Info from './Components/Info';
import Overview from './Components/Overview';
import Sentiment from './Components/Sentiment';
import Tokenomics from './Components/Tokenomics';
import Team from './Components/Team';
import Youmaysec from './Components/Youmaysec';

function App() {
  return (
    <>
      <div className='Page'>
        <Navbar />
        <div className="main">
          <div className="scrollable-section">
            <Hero />
            <Info />
            <Overview cryptoKey="bitcoin" />
            <Sentiment />
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
