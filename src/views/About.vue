<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-row justify="center">
      <v-col cols="8">
        <app-demographics @next="tracker = 2" v-if="tracker === 1" />
        <app-work-experience @prev="tracker = 1" @next="tracker = 3" v-if="tracker === 2" />
        <app-finantial-info @prev="tracker = 2" @submit="submmit" v-if="tracker === 3" />
        <!-- pop up -->
        <app-pop-up :flag="flag" :score="score"></app-pop-up>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
import Demographics from "@/components/Demographics";
import WorkExperienceVue from "../components/WorkExperience.vue";
import FinactialInfoVue from "../components/FinactialInfo.vue";
import PopUp from "../components/PopUp.vue";

export default {
  components: {
    appDemographics: Demographics,
    appWorkExperience: WorkExperienceVue,
    appFinantialInfo: FinactialInfoVue,
    appPopUp: PopUp,
  },
  data: () => ({
    tracker: 1,
    flag: { dialog: false },
    score: [],
  }),
  methods: {
    submmit() {
      const url =
        "http://creditscoreapi-env-1.eba-7zmfpp7h.us-east-2.elasticbeanstalk.com/userresponse";
      const data = this.$store.getters.getAllStates;

      //console.log(data);
      axios.post(url, data).then(({ data, status }) => {
        if (status === 200) {
          console.log(data.message.score);
          this.score = data.message.score;
          this.flag.dialog = true;
        }
      });
      console.log("Submitted");
    },
  },
};
</script>

<style></style>
