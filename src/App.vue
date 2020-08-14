<template>
  <v-app class="app">
    <v-app-bar app color="#223560">
      <div class="d-flex align-center" style="margin-left: 5%;">
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          dark
          width="100"
        />
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo.png"
          transition="scale-transition"
          width="120"
        />
      </div>

      <v-spacer></v-spacer>
      <div class="d-flex justify-content-end" style="margin-right: 15%;">
        <v-btn router to="/" icon color="green">
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer padless>
      <v-col class="grey lighten-5 text-left" cols="12">
        <div style="color: #757575;font-size: 13px">
          <span style="color: #BDBDBD;">
            <strong>Disclaimer:</strong> The CreditGarden Risk Score Estimator is for informational purposes only and is intended to approximate your Credit Score range based on answers to the questions provided. Your actual score, and the impact of any actions taken, results from institution-specific scoring methodologies and the information on your credit reports.
          </span>
          {{" "}}
          <strong>Copyright</strong>
          {{ new Date().getFullYear() }} — CreditGarden Ltd.
        </div>
      </v-col>
    </v-footer>
  </v-app>
</template>
<style lang="scss" scoped>
.app {
  font-family: "Lato", sans-serif;
}
</style>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
