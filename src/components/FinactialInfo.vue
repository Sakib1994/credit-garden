<template>
  <v-card outlined class="mx-auto mb-4" max-width="650">
    <v-card-title>FINANCIAL INFORMATION</v-card-title>
    <v-form v-model="valid">
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-text-field
              clearable
              outlined
              :label="finantialQ[0].q"
              type="number"
              v-model.number="finantialInfo.loan_amt"
              :rules="[requiredRules('Amount planning to borrow')]"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              clearable
              outlined
              :rules="[requiredRules('Estimated return time')]"
              type="number"
              :label="finantialQ[1].q"
              v-model.number="finantialInfo.loan_term_mths"
            />
          </v-col>
          <v-col cols="12">
            <v-select
              outlined
              @change="handleSecurityFlag"
              v-model="finantialInfo.secured_flag"
              :items="finantialQ[2].option"
              :label="finantialQ[2].q"
              :rules="[requiredRules('Loan security type')]"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              clearable
              outlined
              v-if="finantialInfo.secured_flag === 'Secured'"
              type="number"
              :label="finantialQ[3].q"
              v-model.number="finantialInfo.asset_value"
              :rules="[requiredRules('Security asset value')]"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-select
              outlined
              v-if="finantialInfo.secured_flag === 'Secured'"
              v-model="finantialInfo.asset_type"
              :items="finantialQ[4].option"
              :label="finantialQ[4].q"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-select
              outlined
              v-model="finantialInfo.loan_purpose"
              :items="finantialQ[5].option"
              :label="finantialQ[5].q"
              :rules="[requiredRules('Loan purpose')]"
            />
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              clearable
              outlined
              :label="finantialQ[6].q"
              type="number"
              v-model.number="finantialInfo.credit_card"
            />
          </v-col>
          <v-col cols="12">
            <v-card-subtitle class="pl-1" style="font-size:16.5px; color: black">MONTHLY EXPENSES</v-card-subtitle>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              clearable
              outlined
              :label="finantialQ[7].q"
              type="number"
              v-model.number="finantialInfo.mortgage"
              :rules="[requiredRules('Mortgage payments')]"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              clearable
              outlined
              :label="finantialQ[8].q"
              type="number"
              v-model.number="finantialInfo.car_loan"
              :rules="[requiredRules('Car loan payments')]"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              clearable
              outlined
              :label="finantialQ[9].q"
              type="number"
              v-model.number="finantialInfo.other_loan"
              :rules="[requiredRules('Other loan payments')]"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              clearable
              outlined
              :label="finantialQ[10].q"
              type="number"
              v-model.number="finantialInfo.rent"
              :rules="[requiredRules('Rent payments')]"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              clearable
              outlined
              :label="finantialQ[11].q"
              type="number"
              v-model.number="finantialInfo.utilities"
              :rules="[requiredRules('Utilities payment')]"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              clearable
              outlined
              :label="finantialQ[12].q"
              type="number"
              v-model.number="finantialInfo.ins_pymt"
              :rules="[requiredRules('Insurance Payment')]"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              clearable
              outlined
              :label="finantialQ[13].q"
              type="number"
              v-model.number="finantialInfo.life_ins_prem"
              :rules="[requiredRules('Life insurance Payment')]"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              clearable
              outlined
              :label="finantialQ[14].q"
              type="number"
              v-model.number="finantialInfo.transport_exp"
              :rules="[requiredRules('Transport expenses')]"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              clearable
              outlined
              :label="finantialQ[15].q"
              type="number"
              v-model.number="finantialInfo.living_exp"
              :rules="[requiredRules('Living expenses')]"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              clearable
              outlined
              :label="finantialQ[16].q"
              type="number"
              v-model.number="finantialInfo.education_exp"
              :rules="[requiredRules('Education expenses')]"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              clearable
              outlined
              :label="finantialQ[17].q"
              type="number"
              v-model.number="finantialInfo.medical"
              :rules="[requiredRules('Medical expenses')]"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              clearable
              outlined
              :label="finantialQ[18].q"
              type="number"
              v-model.number="finantialInfo.entertainment"
              :rules="[requiredRules('Entertainment expenses')]"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              clearable
              outlined
              :label="finantialQ[19].q"
              type="number"
              v-model.number="finantialInfo.other_income"
              :rules="[requiredRules('Other Income')]"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              clearable
              outlined
              :label="finantialQ[20].q"
              type="number"
              v-model.number="finantialInfo.net_mthly_income"
              :rules="[requiredRules('Net monthly income')]"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              clearable
              outlined
              :label="finantialQ[21].q"
              type="number"
              v-model.number="finantialInfo.other_expenses"
              :rules="[requiredRules('Other expenses')]"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-select
              outlined
              @change="handleBankruptFlag"
              v-model="finantialInfo.bankrupt_flag"
              :items="finantialQ[22].option"
              :label="finantialQ[22].q"
              :rules="[requiredRules('bankruptcy status')]"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              clearable
              outlined
              v-if="finantialInfo.bankrupt_flag === 'Yes'"
              type="number"
              :label="finantialQ[23].q"
              v-model.number="finantialInfo.bankrupt_time_yrs"
              :rules="[requiredRules('Years have passed since your bankruptcy')]"
            />
          </v-col>
          <v-col cols="12">
            <v-switch
              outlined
              v-model="aggree"
              label="I agree with Privacy Agrement"
              color="success"
              value="success"
              :rules="[requiredRules('Please read and accept the Terms of Use and Privacy Agreement')]"
            ></v-switch>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="mx-2">
        <v-btn outlined tile @click="prev" color="success">
          <v-icon left>mdi-arrow-left</v-icon>Previous
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          outlined
          tile
          @click="submit"
          color="success"
          :disabled="!valid"
          :loading="$store.state.loader"
        >
          Submit
          <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
import { finantialQuestions } from "../data.js";
export default {
  data: () => ({
    finantialQ: finantialQuestions,
    requiredRules(field) {
      return (v) => !!v || `${field} `;
    },
    valid: true,
    aggree: false,
  }),
  computed: {
    ...mapState(["finantialInfo"]),
  },
  mounted() {},
  methods: {
    submit() {
      this.$store.dispatch("setFinantialInfo", this.finantialInfo);

      //console.log(this.$store.getters.getAllStates);
      this.$emit("submit");
    },
    prev() {
      this.$emit("prev");
    },
    handleSecurityFlag() {
      if (this.finantialInfo.secured_flag === "Unsecured") {
        this.finantialInfo.asset_value = 0;
        this.finantialInfo.asset_type = "None";
      } else {
        this.finantialInfo.asset_value = "";
        this.finantialInfo.asset_type = "";
      }
      return;
    },
    handleBankruptFlag() {
      if (this.finantialInfo.bankrupt_flag === "No") {
        this.finantialInfo.bankrupt_time_yrs = 0;
      } else {
        this.finantialInfo.bankrupt_time_yrs = "";
      }
      return;
    },
  },
};
</script>

<style></style>
