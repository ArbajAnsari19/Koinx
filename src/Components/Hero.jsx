import React, { useRef, useEffect } from 'react';

function Hero() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      // Adjust container styles based on screen size
      updateContainerStyles();

      // Add an event listener to adjust styles on window resize
      window.addEventListener('resize', updateContainerStyles);
    };
    script.innerHTML = `
      {
        "autosize": false,
        "symbol": "BITSTAMP:BTCUSD",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "2",
        "locale": "en",
        "enable_publishing": true,
        "hide_top_toolbar": true,
        "allow_symbol_change": true,
        "calendar": false,
        "hide_volume": true,
        "support_host": "https://www.tradingview.com"
      }`;
    container.current.innerHTML = "";
    container.current.appendChild(script);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateContainerStyles);
    };
  }, []);

  const updateContainerStyles = () => {
    // Get the current screen width
    const screenWidth = window.innerWidth;

    // Set different values based on screen width
    if (screenWidth < 600) {
      container.current.style.marginTop="30px";
      container.current.style.marginLeft="30px";
      container.current.style.height = "40vh";
      container.current.style.width = "80vw";
      container.current.style.borderRadius = '50px';
    } else {
      container.current.style.height = "80vh";
      container.current.style.width = "60vw";
      container.current.style.borderRadius = '100px';
    }
  };

  return (
    <div className="gr"  ref={container} >
      </div>
  );
}

export default Hero;
