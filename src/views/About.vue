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
        <!-- pop up -->
        <v-dialog v-model="dialog" width="500">

          <v-card>
            <v-card-title class="headline grey lighten-2">
              Credit score
            </v-card-title>

            <v-card-text>
              <v-row>
                  <v-col cols="6">
                    <v-img
                        alt="modal image"
                        class="shrink mr-2"
                        contain
                        src="@/assets/modal.jpg"
                        transition="scale-transition"
                        width="120"
                        />   
                    </v-col>
                  <v-col cols="6">
                      <v-card>
                          <v-card-title>Show Credit Score</v-card-title>
                      </v-card>
                  </v-col>
              </v-row>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false">
                I accept
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-btn @click="dialog = true">Open dialog</v-btn>
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
    dialog: false,
    score: [],
  }),
  methods: {
    submmit() {
      const url =
        "http://creditscoreapi-env-1.eba-7zmfpp7h.us-east-2.elasticbeanstalk.com/userresponse";
      const data = this.$store.getters.getAllStates;

      //console.log(data, info);
      axios.post(url, data).then(({ data, status }) => {
        if (status === 200) {
          this.score = data.message.score;
          console.log(data.message.score);
        }
      });
      console.log("Submitted");
    },
  },
};
</script>

<style></style>
