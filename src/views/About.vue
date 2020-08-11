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
    }),
    methods: {
        submmit() {
            const url = "http://127.0.0.1:5000/userresponse";
            const data = this.$store.getters.getAllStates;

            //console.log(data, info);
            axios.post(url, data).then((res) => {
                console.log(res);
            });
            console.log("Submitted");
        },
    },
};
</script>

<style></style>
