<template>
  <div>
<<<<<<< HEAD
    <!--<ZurichGreen  />-->
    <!-- <SingaporeGreen /> -->
    <!--<VancouverGreen  />-->
    <VancouverFrequency />
    <ZurichFrequency />
    <SingaporeFrequency />
=======
    <!--<VancouverGreen    />-->
    <SingaporeGreen />
    <!--<ZurichGreen   />-->
>>>>>>> d41d03a8fdc067f72f7346a48a4387ee47e35b7d
  </div>
</template>

<script>
//import ZurichGreen from "./Green/Zurich-Green";
// import SingaporeGreen from "./Green/Singapore-Green";
//import VancouverGreen from "./Green/Vancouver-Green";
import VancouverFrequency from "./Frequency/Vancouver-Frequency";
import ZurichFrequency from "./Frequency/Zurich-Frequency";
import SingaporeFrequency from "./Frequency/Singapore-Frequency";

export default {
  name: "CaseStudyMap",
  components: {
    //ZurichGreen
    // SingaporeGreen
    //VancouverGreen
    VancouverFrequency,
    ZurichFrequency,
    SingaporeFrequency
  }
};
</script>
