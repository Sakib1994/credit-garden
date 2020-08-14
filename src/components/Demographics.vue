<template>
  <div class="demographics">
    <v-card outlined class="mx-auto mb-4" max-width="650">
      <v-card-title>DEMOGRAPHIC INFORMATION</v-card-title>

      <v-form v-model="valid">
        <v-card-text>
          <v-row>
            <v-col cols="12" class="my-0">
              <v-text-field
                outlined
                class="mb-2"
                type="number"
                :label="questions[0].q"
                v-model.number="demographics.address1yrs"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" class="my-0">
              <v-select
                outlined
                class="mb-2"
                :menu-props="{ auto: true, overflowY: true }"
                v-model="demographics.address1stat"
                :items="questions[1].option"
                :label="questions[1].q"
                dense
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6" class="my-0">
              <v-select
                outlined
                class="mb-2"
                v-model="demographics.address1type"
                :items="questions[2].option"
                :label="questions[2].q"
                dense
              ></v-select>
            </v-col>
            <v-col cols="12" class="my-0">
              <v-text-field
                outlined
                class="mb-2"
                type="number"
                :label="questions[3].q"
                v-model.number="demographics.address2yrs"
              />
            </v-col>
            <v-col cols="12" sm="6" class="my-0">
              <v-select
                outlined
                class="mb-2"
                v-model="demographics.address2stat"
                :items="questions[4].option"
                :label="questions[4].q"
                dense
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6" class="my-0">
              <v-select
                outlined
                class="mb-2"
                v-model="demographics.address2type"
                :items="questions[5].option"
                :label="questions[5].q"
                dense
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6" class="my-0">
              <v-select
                outlined
                class="mb-2"
                :rules="[requiredRules('Marital Status')]"
                v-model="demographics.marital_status"
                :items="questions[6].option"
                :label="questions[6].q"
                dense
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6" class="my-0">
              <v-select
                outlined
                class="mb-2"
                :rules="[requiredRules('Gender')]"
                v-model="demographics.gender"
                :items="questions[7].option"
                :label="questions[7].q"
                dense
              ></v-select>
            </v-col>
            <v-col cols="12" class="my-0">
              <v-text-field
                outlined
                class="mb-2"
                type="number"
                v-model.number="demographics.num_depend"
                :label="questions[8].q"
              />
            </v-col>
            <v-col cols="12" class="my-0">
              <v-text-field
                outlined
                class="mb-2"
                type="number"
                v-model.number="demographics.num_dep_living_with_you"
                :label="questions[9].q"
              />
            </v-col>
            <v-col cols="12" class="my-0">
              <v-text-field
                outlined
                class="mb-2"
                type="number"
                :rules="[requiredRules('Age')]"
                v-model.number="demographics.age"
                :label="questions[10].q"
              />
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="mx-2">
          <v-spacer></v-spacer>
          <v-btn outlined tile @click="next()" color="success" :disabled="!valid">
            Next
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { questionsd } from "@/data.js";
import { mapState } from "vuex";
export default {
  data: () => ({
    questions: questionsd,
    valid: true,
    requiredRules(field) {
      return (v) => !!v || `${field} is required`;
    },
  }),
  computed: {
    ...mapState(["demographics"]),
  },
  mounted() {
    //console.log(this.$store.state.demographics);
  },
  methods: {
    next() {
      this.$emit("next");
      this.$store.dispatch("setDemographics", this.demographics);
    },
  },
};
</script>
