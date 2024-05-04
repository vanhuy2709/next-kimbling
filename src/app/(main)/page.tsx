'use client'
import { useState, useEffect } from "react";
import Hero from "@/components/hero/home.hero";
import Resume from "@/components/resume/resume";
import Expertise from "@/components/expertise/expertise";
import Client from "@/components/client/client";

const HomePage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Scroll down to change color
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerStyle = {
    transition: 'background-color 0.5s ease',
    color: scrollPosition > 200 ? 'white' : 'black',
    backgroundColor: scrollPosition > 200 ? 'black' : 'white' // Change 100 to your desired scroll position
  };


  return (
    <div className="homepage" style={headerStyle}>
      <Hero />
      <Resume />
      <Expertise />
      <Client />
    </div>
  );
};

export default HomePage;