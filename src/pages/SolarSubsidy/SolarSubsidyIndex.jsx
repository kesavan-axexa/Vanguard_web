import React from "react";
import SubsidyHero from "../../components/SolarSubsidy/SubsidyHero";
import SubsidyAbout from "../../components/SolarSubsidy/SubsidyAbout";
import SubsidyFAQ from "../../components/SolarSubsidy/SubsidyFAQ";
import SubsidyCreteria from "../../components/SolarSubsidy/SubsidyCreteria";
import CallToAction from "../../components/Shared/CallToAction";
import SubsidyTable from "../../components/SolarSubsidy/SubsidyTable";

const SolarSubsidyIndex = () => {
  return (
    <div>
        <SubsidyHero/>
        <SubsidyCreteria />
        <SubsidyAbout/>
        <SubsidyFAQ/>
        <SubsidyTable/>
        <CallToAction/>
    </div>
  );
};

export default SolarSubsidyIndex;