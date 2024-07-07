
import React from 'react';
import HeroSection from './Home Page/HeroSection';
import DownloadSection from './Home Page/DownloadSection';
import TvSection from './Home Page/TvSection';
import WatchEverywhereSection from './Home Page/WatchEverywhereSection';
import KidsSection from './Home Page/KidsSection';
import FAQSection from './Home Page/FAQSection';
import Footer from './Footer.js';

const Body = () => {
  return (
    <>
      <HeroSection />
      <TvSection />
      <DownloadSection />
      <WatchEverywhereSection />
      <KidsSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Body;
