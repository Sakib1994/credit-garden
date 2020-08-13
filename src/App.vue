<template>
  <v-app class="app">
    <v-app-bar app color="black lighten-5">
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
          <v-icon>mdi-cached</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer padless>
      <v-col class="grey lighten-5 text-center" cols="12">
        <div style="color: #BDBDBD;font-size: 12px">
          <strong>Copyright</strong>
          {{ new Date().getFullYear() }} —
          <strong>CreditGardenLtd</strong>
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
