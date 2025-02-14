import React from "react";
import SubsidyHero from "../../components/SolarSubsidy/SubsidyHero";
import SubsidyAbout from "../../components/SolarSubsidy/SubsidyAbout";
import SubsidyFAQ from "../../components/SolarSubsidy/SubsidyFAQ";
import SubsidyCreteria from "../../components/SolarSubsidy/SubsidyCreteria";
import SubsidyTable from "../../components/SolarSubsidy/SubsidyTable";
import SolarSubsidyCards from "@/components/SolarSubsidy/SubsidyCards";
import SubsidyAction from "@/components/SolarSubsidy/SubsidyAction";

const SolarSubsidyIndex = () => {
  return (
    <div>
        <SubsidyHero/>
        <SolarSubsidyCards/>
        <SubsidyCreteria />
        <SubsidyAbout/>
        <SubsidyTable/>
        <SubsidyFAQ/>
        <SubsidyAction/>
    </div>
  );
};

export default SolarSubsidyIndex;