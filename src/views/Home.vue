<template>
  <div class="home">
    <v-row
      no-gutters
      style="height: 65vh;background: #a4d05f; text-align:center;"
      align="center"
      justify="center"
    >
      <v-col cols="8">
        <v-card outlined tile color="#a4d05f">
          <v-card-text
            class="text-h3 py-0"
            style="text-align: center; color: #223560;  font-weight: 700; font-family: Lato, sans-serif;"
          >Start building your credit score</v-card-text>
          <v-card-text class="text-h5" style="text-align: center; color: #223560">
            Get your credit score and know your financial risk while
            taking loan. Start building your credit score the most
            convenient way.
          </v-card-text>

          <v-btn
            router
            to="/about"
            class="my-6"
            color="#223560"
            tile
            large
            style="text-align: center; color: white;  font-weight: bold; font-family: Lato, sans-serif;"
          >
            GET YOUR SCORE NOW
            <v-icon right>mdi-send</v-icon>
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters style="height: 8vh;background: #223560;" align="center">
      <v-col>
        <p
          class="white--text"
          style="text-align: center; font-weight: 400; font-family: Lato, sans-serif; padding-top: 10px"
        >
          We are looking for new ways to deliver financial opportunity
          -- No matter how you define it.
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
