import SectionHeading from "@/components/Helper/sectionHeading";
import React from "react";
import DestinationSlider from "./DestinationSlider";

const Destination = () => {
  return (
    <div className="pt-20 pb-20">
      {/* Section heading */}
      <SectionHeading heading="Exploring Popular Destinations" />

      {/* Section content */}
      <div className="mt-14 w-[80%] mx-auto">
        {/* Slider */}
        <DestinationSlider />
      </div>
    </div>
  );
};

export default Destination;

