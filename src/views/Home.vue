<template>
    <div class="home">
        <v-row
            no-gutters
            style="height: 70vh;background: #a4d05f;"
            align="center"
            justify="center"
        >
            <v-col cols="4">
                <v-card class="pa-" outlined tile color="#a4d05f">
                    <v-card-title class="text-h3"
                        >Start building your credit score</v-card-title
                    >
                    <v-card-text class="text-h6">
                        Sign up now to be alerted when we launch and receive
                        100% of your processing fee
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
                    src="../assets/landingImage.png"
                    min-width="100"
                    dark
                    width="300"
                />
            </v-col>
        </v-row>
        <v-row
            no-gutters
            style="height: 10vh;background: #223560"
            align="center"
        >
            <v-col>
                <p class="text-h6 white--text" style="text-align: center">
                    We are looking for new ways to deliver finantial oppertunaty
                    - No matter how you define it
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
