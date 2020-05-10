<template>
  <div>
    <ZurichGreen />
    <SingaporeGreen />
    <VancouverGreen />
    <VancouverFrequency />
    <ZurichFrequency />
    <SingaporeFrequency />
  </div>
</template>

<script>
import ZurichGreen from "./Green/Zurich-Green";
import SingaporeGreen from "./Green/Singapore-Green";
import VancouverGreen from "./Green/Vancouver-Green";
import VancouverFrequency from "./Frequency/Vancouver-Frequency";
import ZurichFrequency from "./Frequency/Zurich-Frequency";
import SingaporeFrequency from "./Frequency/Singapore-Frequency";

export default {
  name: "CaseStudyMap",
  components: {
    ZurichGreen,
    SingaporeGreen,
    VancouverGreen,
    VancouverFrequency,
    ZurichFrequency,
    SingaporeFrequency
  }
};
</script>
