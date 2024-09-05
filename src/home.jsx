// eslint-disable-next-line no-unused-vars
import React from "react";

import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Category from "./_components/Category";

import LogoScroll from "./_components/logo-Scoll";
import MostSearchdCar from "./_components/MostSearchdCar";
import InfoSection from "./_components/InfoSection";
import Footer from "./_components/Footer";

function Home() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Hero */}
      <Hero />
      {/* Category */}
      <Category />
      {/* logomarcas */}
      <LogoScroll />
      {/* Most Searchd Car */}
      <MostSearchdCar />
      {/* InfoSection */}
      <InfoSection />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
