<template>
  <div class="home">
    <v-row
      no-gutters
      style="height: 70vh;background: #a4d05f;"
      align="center"
      justify="center"
    >
      <v-col cols="4">
        <v-card class="pa-2" outlined tile color="#a4d05f">
          <v-card-title class="text-h3">
            Start building your credit score
          </v-card-title>
          <v-card-text class="text-h6">
            Sign up now to be alerted when we launch and receive 100% of your
            processing fee
          </v-card-text>
          <v-card-actions>
            <v-btn class="ml-2" color="white primary--text"
              >Sign up for early access</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          src="@/assets/logo.svg"
          min-width="100"
          dark
          width="300"
        />
      </v-col>
    </v-row>
    <v-row no-gutters style="height: 10vh;background: #223560" align="center">
      <v-col>
        <p class="text-h6 white--text" style="text-align: center">
          We are looking for new ways to deliver finantial oppertunaty - No
          matter how you define it
        </p>
      </v-col>
    </v-row>
    <div class="grey lighten-4" style="height: 70vh;">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="4" md="3">
            <v-card>
              <v-card-title class="text-subtitle-1" style="text-align: center">
                <v-icon class="mx-auto my-2" large style="width: 100%">mdi-folder</v-icon>
                help friend climb the credit Ladder
              </v-card-title>
              <v-card-text></v-card-text>
            </v-card>
          </v-col>
          <v-col cols="4" md="3">
            <v-card>
              <v-card-title class="text-subtitle-1" style="text-align: center">
                
                <v-icon color="pink darken-2" large class="mx-auto my-2" style="width: 100%">mdi-newspaper-variant-multiple</v-icon>
                
                By far the easiest way to get a loan </v-card-title>
              <v-card-text></v-card-text> 
              </v-card>
          </v-col>
          <v-col cols="4" md="3">
            <v-card>
              <v-card-title class="text-subtitle-1">
                <v-icon class="mx-auto my-2" large style="width: 100%">mdi-hammer-screwdriver</v-icon>
                Complete weekly Challenges, We guide you on your credit journey
              </v-card-title>
              <v-card-text></v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div color="white" style="height: 70vh;">
      <p class="text-h3">Use your network to build credit</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
