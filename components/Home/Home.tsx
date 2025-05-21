"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";

import Hotel from "./Hotel/Hotel";
import WhyChoose from "./WhyChoose/WhyChoose";
import Review from "./Reviews/Reviews";
import News from "./News/News";
import NewsLatter from "./Newslatter/NewsLatter";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Destination from "./Destination/destination";

const Home = () => {
  useEffect(() => {
    const initAos = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAos();
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <Destination />
      <Hotel />
      <WhyChoose />
      <Review />
      <News />
      <NewsLatter />
    </div>
  );
};

export default Home;
