<template>
  <v-dialog v-model="flag.dialog" width="700">
          <v-card>
            <v-card-title class="headline grey lighten-2">
              Credit score
            </v-card-title>

            <v-card-text>
              <v-row>
                <v-col cols="5">
                  <v-img
                    alt="modal image"
                    class="shrink mr-2"
                    contain
                    src="@/assets/modal.jpg"
                    transition="scale-transition"
                    width="300"
                  />
                </v-col>
                <v-col cols="7">
                  <v-card
                    class="white--text text-center"
                    color="#223560"
                    width="400"
                  >
                    <v-card-text>
                      <p class="text-h5 white--text my-1">Risk Profile</p>
                      <p class="text-h3 white--text mt-1 mb-0">{{score[3]}}</p>
                      <p class="text-subtitle-1  white--text my-0">Credit Score</p>
                      <p class="text-h4 white--text mt-2">{{score[1]}}</p>
                      <p class="text-subtitle-1 white--text my-2">Risk Level</p>
                    </v-card-text>
                    
                    <v-card-actions class="ml-3">
                      <v-row class="my-0">
                          <v-col cols="9" class="my-0">
                        <v-text-field
                          label="Get Result On Your Email" 
                          outlined type="email"
                          dense dark
                        ></v-text-field></v-col><v-col cols="3" class="my-0">
                        <v-btn class="mt-1 pr-2" color="green" dark>Send</v-btn></v-col>
                      </v-row>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="flag.dialog = false">
                close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
</template>

<script>
export default {
    props: {
        flag: Object,
        score: Array
    },
    mounted(){
        console.log(this.score);
    }
}
</script>

<style>

</style>