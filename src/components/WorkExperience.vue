<template>
  <div>
    <v-card outlined class="mx-auto mb-4" max-width="650">
      <v-card-title>WORK EXPERIENCE</v-card-title>
      <v-form v-model="valid">
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="6" class="my-0">
              <v-select
                outlined
                v-model="workExperience.employ_types1"
                :items="workQuestions[0].option"
                :label="workQuestions[0].q"
                dense
              />
            </v-col>
            <v-col cols="12" sm="6" class="my-0">
              <v-select
                outlined
                v-model="workExperience.employ_det1"
                :items="workQuestions[1].option"
                :label="workQuestions[1].q"
                dense
              />
            </v-col>
            <v-col cols="12" class="ma-0">
              <v-text-field
                outlined
                :label="workQuestions[2].q"
                type="number"
                v-model.number="workExperience.yrs_posn1"
              />
            </v-col>
            <v-col cols="12" sm="6" class="my-0">
              <v-select
                outlined
                v-model="workExperience.industry1"
                :items="workQuestions[3].option"
                :label="workQuestions[3].q"
                dense
              />
            </v-col>
            <v-col cols="12" sm="6" class="my-0">
              <v-select
                outlined
                v-model="workExperience.employ_types2"
                :items="workQuestions[4].option"
                :label="workQuestions[4].q"
                dense
              />
            </v-col>
            <v-col cols="12" class="my-0">
              <v-select
                outlined
                v-model="workExperience.employ_det2"
                :items="workQuestions[5].option"
                :label="workQuestions[5].q"
                dense
              />
            </v-col>
            <v-col cols="12" class="ma-0">
              <v-text-field
                outlined
                :label="workQuestions[6].q"
                type="number"
                v-model.number="workExperience.yrs_posn2"
              />
            </v-col>
            <v-col cols="12" sm="6" class="my-0">
              <v-select
                outlined
                v-model="workExperience.industry2"
                :items="workQuestions[7].option"
                :label="workQuestions[7].q"
                dense
              />
            </v-col>
            <v-col cols="12" sm="6" class="my-0">
              <v-select
                outlined
                v-model="workExperience.employ_types3"
                :items="workQuestions[8].option"
                :label="workQuestions[8].q"
                dense
              />
            </v-col>
            <v-col cols="12" class="my-0">
              <v-select
                outlined
                v-model="workExperience.employ_det3"
                :items="workQuestions[9].option"
                :label="workQuestions[9].q"
                dense
              />
            </v-col>
            <v-col cols="12" class="ma-0">
              <v-text-field
                outlined
                :label="workQuestions[10].q"
                type="number"
                v-model.number="workExperience.yrs_posn3"
              />
            </v-col>
            <v-col cols="12" class="my-0">
              <v-select
                outlined
                v-model="workExperience.industry3"
                :items="workQuestions[11].option"
                :label="workQuestions[11].q"
                dense
              />
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="mx-2">
          <v-btn outlined tile @click="prev" color="success">
            <v-icon outlined tile left>mdi-arrow-left</v-icon>Back
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn outlined tile @click="next" color="success">
            Next
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { workExperienceD } from "@/data.js";
import { mapState } from "vuex";
export default {
  data: () => ({
    workQuestions: workExperienceD,
    requiredRules(field) {
      return (v) => !!v || `${field} is required`;
    },
  }),
  computed: {
    ...mapState(["workExperience"]),
  },
  mounted() {
    //console.log(this.$store.state.demographics);
  },
  methods: {
    next() {
      this.$emit("next");
      this.$store.dispatch("setWorkExperience", this.workExperience);
    },
    prev() {
      this.$emit("prev");
    },
  },
};
</script>

<style></style>
