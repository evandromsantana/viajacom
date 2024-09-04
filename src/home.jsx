// eslint-disable-next-line no-unused-vars
import React from "react";

import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Category from "./_components/Category";

import LogoScroll from "./_components/logo-Scoll";

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
    </div>
  );
}

export default Home;
