<template>
    <v-card class="mx-auto mb-4" color="cyan lighten-5" max-width="650">
        <v-card-title>
            Financial Info
        </v-card-title>
        <v-form v-model="valid">
            <v-card-text>
                <v-text-field
                    :label="finantialQ[0].q"
                    type="number"
                    v-model.number="finantialInfo.loan_amt"
                    :rules="[requiredRules('Amount planning to borrow')]"
                />
                <v-text-field
                    :rules="[requiredRules('Estimated return time')]"
                    type="number"
                    :label="finantialQ[1].q"
                    v-model.number="finantialInfo.loan_term_mths"
                />
                <v-select
                    @change="handleSecurityFlag"
                    v-model="finantialInfo.secured_flag"
                    :items="finantialQ[2].option"
                    :label="finantialQ[2].q"
                    :rules="[requiredRules('Loan security type')]"
                />
                <v-text-field
                    v-show="finantialInfo.secured_flag === 'Secured'"
                    type="number"
                    :label="finantialQ[3].q"
                    v-model.number="finantialInfo.asset_value"
                    :rules="[requiredRules('Security asset value')]"
                />
                <v-select
                    v-show="finantialInfo.secured_flag === 'Secured'"
                    v-model="finantialInfo.asset_type"
                    :items="finantialQ[4].option"
                    :label="finantialQ[4].q"
                />
                <v-select
                    v-model="finantialInfo.loan_purpose"
                    :items="finantialQ[5].option"
                    :label="finantialQ[5].q"
                    :rules="[requiredRules('Loan purpose')]"
                />
                <v-text-field
                    :label="finantialQ[6].q"
                    type="number"
                    v-model.number="finantialInfo.credit_card"
                    :rules="[requiredRules('Credit card payments')]"
                />
                <v-text-field
                    :label="finantialQ[7].q"
                    type="number"
                    v-model.number="finantialInfo.mortgage"
                    :rules="[requiredRules('Mortgage payments')]"
                />
                <v-text-field
                    :label="finantialQ[8].q"
                    type="number"
                    v-model.number="finantialInfo.car_loan"
                    :rules="[requiredRules('Car loan payments')]"
                />
                <v-text-field
                    :label="finantialQ[9].q"
                    type="number"
                    v-model.number="finantialInfo.other_loan"
                    :rules="[requiredRules('Other loan payments')]"
                />
                <v-text-field
                    :label="finantialQ[10].q"
                    type="number"
                    v-model.number="finantialInfo.rent"
                    :rules="[requiredRules('Rent payments')]"
                />
                <v-text-field
                    :label="finantialQ[11].q"
                    type="number"
                    v-model.number="finantialInfo.utilities"
                    :rules="[requiredRules('Utilities payment')]"
                />
                <v-text-field
                    :label="finantialQ[12].q"
                    type="number"
                    v-model.number="finantialInfo.ins_pymt"
                    :rules="[requiredRules('Insurance Payment')]"
                />
                <v-text-field
                    :label="finantialQ[13].q"
                    type="number"
                    v-model.number="finantialInfo.life_ins_prem"
                    :rules="[requiredRules('Life insurance Payment')]"
                />
                <v-text-field
                    :label="finantialQ[14].q"
                    type="number"
                    v-model.number="finantialInfo.transport_exp"
                    :rules="[requiredRules('Transport expenses')]"
                />
                <v-text-field
                    :label="finantialQ[15].q"
                    type="number"
                    v-model.number="finantialInfo.living_exp"
                    :rules="[requiredRules('Living expenses')]"
                />
                <v-text-field
                    :label="finantialQ[16].q"
                    type="number"
                    v-model.number="finantialInfo.education_exp"
                    :rules="[requiredRules('Education expenses')]"
                />
                <v-text-field
                    :label="finantialQ[17].q"
                    type="number"
                    v-model.number="finantialInfo.medical"
                    :rules="[requiredRules('Medical expenses')]"
                />
                <v-text-field
                    :label="finantialQ[18].q"
                    type="number"
                    v-model.number="finantialInfo.entertainment"
                    :rules="[requiredRules('Entertainment expenses')]"
                />
                <v-text-field
                    :label="finantialQ[19].q"
                    type="number"
                    v-model.number="finantialInfo.other_income"
                    :rules="[requiredRules('Other Income')]"
                />
                <v-text-field
                    :label="finantialQ[20].q"
                    type="number"
                    v-model.number="finantialInfo.net_mthly_income"
                    :rules="[requiredRules('Net monthly income')]"
                />
                <v-text-field
                    :label="finantialQ[21].q"
                    type="number"
                    v-model.number="finantialInfo.other_expenses"
                    :rules="[requiredRules('Other expenses')]"
                />
                <v-select
                    @change="handleBankruptFlag"
                    v-model="finantialInfo.bankrupt_flag"
                    :items="finantialQ[22].option"
                    :label="finantialQ[22].q"
                    :rules="[requiredRules('bankruptcy status')]"
                />
                <v-text-field
                    v-if="finantialInfo.bankrupt_flag === 'Yes'"
                    type="number"
                    :label="finantialQ[23].q"
                    v-model.number="finantialInfo.bankrupt_time_yrs"
                    :rules="[
                        requiredRules(
                            'Years have passed since your bankruptcy'
                        ),
                    ]"
                />
            </v-card-text>
            <v-card-actions>
                <v-btn @click="prev" color="primary">
                    <v-icon left>mdi-arrow-left</v-icon>
                    Previous
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn @click="submit" color="success" :disabled="!valid"
                    >Submit
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
            return (v) => !!v || `${field} is required`;
        },
        valid: true,
    }),
    computed: {
        ...mapState(["finantialInfo"]),
    },
    mounted() {},
    methods: {
        submit() {
            this.$store.dispatch("setFinantialInfo", this.finantialInfo);

            console.log(this.$store.getters.getAllStates);
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
