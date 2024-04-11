'use client';
import AboutHero from "@/components/hero/about.hero";
import Brand from "@/components/brand/about.brand";
import Current from "@/components/current/current";
import { useEffect, useState } from "react";

const AboutPage = () => {
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
    <div className="about" style={headerStyle}>
      <AboutHero />
      <Brand />
      <Current />
    </div>
  );
};

export default AboutPage;