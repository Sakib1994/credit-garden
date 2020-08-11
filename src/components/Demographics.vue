<template>
  <div class="demographics">
      <v-card class="mx-auto mb-4" color="green lighten-5" max-width="650">
      <v-card-title color="grey">
        Demography
      </v-card-title>
      <v-card-text>
        <v-text-field
          class="mb-2"
          :label="questions[0].q"
          v-model.number="demographics.address1yrs"
        >
        </v-text-field>
        <v-select
          class="mb-2"
          v-model="demographics.address1stat"
          :items="questions[1].option"
          :label="questions[1].q"
          dense
        >
        </v-select>
        <v-select
          class="mb-2"
          v-model="demographics.address1type"
          :items="questions[2].option"
          :label="questions[2].q"
          dense
        >
        </v-select>
        <v-text-field
          class="mb-2"
          :label="questions[3].q"
          v-model.number="demographics.address2yrs"
        />
        <v-select
          class="mb-2"
          v-model="demographics.address2stat"
          :items="questions[4].option"
          :label="questions[4].q"
          dense
        >
        </v-select>
        <v-select
          class="mb-2"
          v-model="demographics.address2type"
          :items="questions[5].option"
          :label="questions[5].q"
          dense
        >
        </v-select>
        <v-select
          class="mb-2"
          :rules="[requiredRules('Marital Status')]"
          v-model="demographics.marital_status"
          :items="questions[6].option"
          :label="questions[6].q"
          dense
        >
        </v-select>
        <v-select
          class="mb-2"
          :rules="[requiredRules('Time')]"
          v-model="demographics.gender"
          :items="questions[7].option"
          :label="questions[7].q"
          dense
        >
        </v-select>
        <v-text-field
          class="mb-2"
          v-model.number="demographics.num_depend"
          :label="questions[8].q"
        />
        <v-text-field
          class="mb-2"
          v-model.number="demographics.num_dep_living_with_you"
          :label="questions[9].q"
        />
        <v-text-field
          class="mb-2"
          :rules="[requiredRules('Age')]"
          v-model.number="demographics.age"
          :label="questions[10].q"
        />
      </v-card-text>
      <v-card-actions>
          <v-spacer></v-spacer>
        <v-btn @click="next()" color="primary">
            Next 
            <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { questionsd } from "@/data.js";
import {mapState} from 'vuex'
export default {
    data: () => ({
        questions: questionsd,
        requiredRules(field) {
        return (v) => !!v || `${field} is required`;
        }
    }),
    computed: {
        ...mapState(['demographics'])
    },
    mounted(){
        //console.log(this.$store.state.demographics);
    },
  methods: {
      next(){
        this.$emit('next');
        this.$store.dispatch('setDemographics', this.demographics);
      }
  }
}
</script>

<style>

</style>