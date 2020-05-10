<template>
  <div>
    <!--<VancouverGreen    />-->
    <SingaporeGreen />
    <!--<ZurichGreen   />-->
  </div>
</template>

<script>
//import ZurichGreen from "./Green/Zurich-Green";
import SingaporeGreen from "./Green/Singapore-Green";
//import VancouverGreen from "./Green/Vancouver-Green";

export default {
  name: "CaseStudyMap",
  components: {
    //ZurichGreen
    SingaporeGreen
    //VancouverGreen
  }
};
</script>
