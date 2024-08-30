// eslint-disable-next-line no-unused-vars
import React from "react";

import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Category from "./_components/Category";
// import { CarouselMark } from "./_components/Carousel-mark";
import InfinityScroll from "./_components/Infinite-Scroll";

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
      {/* <CarouselMark /> */}
      <InfinityScroll />
    </div>
  );
}

export default Home;
