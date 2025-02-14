import AboutGrid from "@/components/About/AboutGrid";
import AboutHero from "@/components/About/AboutHero";
import BentoGrid from "@/components/About/BentoGrid";
import JoinSolarMovement from "@/components/About/JoinSolarMovement";
import VisionMission from "@/components/About/VisionMission";
import React from "react";

const AboutIndex = () => {
  return (
    <>
      <AboutHero />
      <BentoGrid />
      <VisionMission />
      <AboutGrid  />
      <JoinSolarMovement />
    </>
  );
};

export default AboutIndex;
