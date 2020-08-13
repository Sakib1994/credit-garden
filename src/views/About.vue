<template>
  <div class="about">
    <v-row justify="center">
      <v-col cols="8">
        <app-demographics @next="tracker = 2" v-if="tracker === 1" />
        <app-work-experience @prev="tracker = 1" @next="tracker = 3" v-if="tracker === 2" />
        <app-finantial-info @prev="tracker = 2" @submit="submmit" v-if="tracker === 3" />
        <!-- pop up -->
        <v-btn @click="submmit"></v-btn>
        <app-pop-up :flag="flag" :score="score" :user_id="user_id"></app-pop-up>
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
    user_id: "",
  }),
  methods: {
    submmit() {
      const url =
        "http://creditscoreapi-env-1.eba-7zmfpp7h.us-east-2.elasticbeanstalk.com/userresponse";
      //const data = this.$store.getters.getAllStates;
      const info = {
        address1yrs: 20,
        address1stat: "Rent",
        address1type: "Apartment",
        address2yrs: 10,
        address2stat: "Rent",
        address2type: "Apartment",
        marital_status: "Married",
        gender: "Male",
        num_depend: 2,
        num_dep_living_with_you: 2,
        age: 48,
        employ_types1: "Full-time",
        employ_det1: "Manager",
        yrs_posn1: 8,
        industry1: "Accountancy & Finance",
        employ_types2: "Full-time",
        employ_det2: "Junior",
        yrs_posn2: 10,
        industry2: "Accountancy & Finance",
        employ_types3: "Full-time",
        employ_det3: "Entry-Level",
        yrs_posn3: 3,
        industry3: "Accountancy & Finance",
        loan_amt: 100000,
        loan_term_mths: 48,
        secured_flag: "Secured",
        asset_value: 10000,
        asset_type: "Home",
        loan_purpose: "Home Improvement",
        credit_card: 1000,
        mortgage: 1000,
        car_loan: 1000,
        other_loan: 1000,
        rent: 2000,
        utilities: 500,
        ins_pymt: 500,
        life_ins_prem: 500,
        transport_exp: 500,
        living_exp: 2000,
        education_exp: 1000,
        medical: 500,
        entertainment: 200,
        other_income: 2000,
        net_mthly_income: 10000,
        other_expenses: 500,
        bankrupt_flag: "No",
        bankrupt_time_yrs: 0,
      };
      try {
        axios.post(url, info).then(({ data, status }) => {
          if (status === 200) {
            this.score = data.message.score;
            this.user_id = data.message.user_id;
            this.flag.dialog = true;
            console.log(this.user_id, this.score);
          }
        });
        console.log("Submitted");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
