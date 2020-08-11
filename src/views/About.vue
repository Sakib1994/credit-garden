<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-row justify="center">
      <v-col cols="8">
        <app-demographics @next="tracker = 2" v-if="tracker === 1" />
        <app-work-experience
          @prev="tracker = 1"
          @next="tracker = 3"
          v-if="tracker === 2"
        />
        <app-finantial-info
          @prev="tracker = 2"
          @submit="submmit"
          v-if="tracker === 3"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
import Demographics from "@/components/Demographics";
import WorkExperienceVue from "../components/WorkExperience.vue";
import FinactialInfoVue from "../components/FinactialInfo.vue";
export default {
  components: {
    appDemographics: Demographics,
    appWorkExperience: WorkExperienceVue,
    appFinantialInfo: FinactialInfoVue,
  },
  data: () => ({
    tracker: 1,
  }),
  methods: {
    submmit() {
      const url = "http://creditscoreapi-env-1.eba-7zmfpp7h.us-east-2.elasticbeanstalk.com/userresponse";
       const data = this.$store.getters.getAllStates;
      const info = {
        address1yrs: data.address1yrs,
        address1stat: data.address1stat,
        address1type: data.address1type,
        address2yrs: data.address2yrs,
        address2stat: data.address2stat,
        address2type: data.address2type,
        marital_status: data.marital_status,
        gender: data.marital_status,
        num_depend: data.num_depend,
        num_dep_living_with_you: data.num_dep_living_with_you,
        age: data.age,
        employ_types1: data.employ_types1,
        employ_det1: data.employ_det1,
        yrs_posn1: data.yrs_posn1,
        industry1:data.industry1,
        employ_types2: data.employ_types2,
        employ_det2: data.employ_det2,
        yrs_posn2: data.yrs_posn2,
        industry2: data.industry2,
        employ_types3: data.employ_types3,
        employ_det3: data.employ_det3,
        yrs_posn3: data.yrs_posn3,
        industry3: data.industry3,
        loan_amt: data.loan_amt,
        loan_term_mths: data.loan_term_mths,
        secured_flag: data.secured_flag,
        asset_value: data.asset_value,
        asset_type: data.asset_type,
        loan_purpose: data.loan_purpose,
        credit_card: data.credit_card,
        mortgage: data.mortgage,
        car_loan: data.car_loan,
        other_loan: data.other_loan,
        rent: data.rent,
        utilities: data.utilities,
        ins_pymt: data.ins_pymt,
        life_ins_prem: data.life_ins_prem,
        transport_exp: data.transport_exp,
        living_exp: data.living_exp,
        education_exp: data.education_exp,
        medical: data.medical,
        entertainment: data.entertainment,
        other_income: data.other_income,
        net_mthly_income: data.appWorkExperience,
        other_expenses: data.other_expenses,
        bankrupt_flag: data.bankrupt_flag,
        bankrupt_time_yrs: data.bankrupt_time_yrs,
      };
      console.log(data, info);
      axios.post(url, data).then((res) => {
        console.log(res);
      });
      console.log("Submitted");
    },
  },
};
</script>

<style></style>
