import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loader: false,
        demographics: {
            address1yrs: "",
            address1stat: "",
            address1type: "",
            address2yrs: "",
            address2stat: "",
            address2type: "",
            marital_status: "",
            gender: "",
            num_depend: "",
            num_dep_living_with_you: "",
            age: "",
        },
        workExperience: {
            employ_types1: "",
            employ_det1: "",
            yrs_posn1: "",
            industry1: "",
            employ_types2: "",
            employ_det2: "",
            yrs_posn2: "",
            industry2: "",
            employ_types3: "",
            employ_det3: "",
            yrs_posn3: "",
            industry3: "",
        },
        finantialInfo: {
            loan_amt: "",
            loan_term_mths: "",
            secured_flag: "",
            asset_value: "",
            asset_type: "",
            loan_purpose: "",
            credit_card: "",
            mortgage: "",
            car_loan: "",
            other_loan: "",
            rent: "",
            utilities: "",
            ins_pymt: "",
            life_ins_prem: "",
            transport_exp: "",
            living_exp: "",
            education_exp: "",
            medical: "",
            entertainment: "",
            other_income: "",
            net_mthly_income: "",
            other_expenses: "",
            bankrupt_flag: "",
            bankrupt_time_yrs: "",
        },
    },
    mutations: {
        setDemographics: (state, payload) => (state.demographics = payload),
        setWorkExperience: (state, payload) => (state.workExperience = payload),
        setFinantialInfo: (state, payload) => (state.finantialInfo = payload),
        setLoader: (state, payload) => (state.loader = payload),
    },
    actions: {
        setDemographics: ({ commit }, payload) => {
            commit("setDemographics", payload);
        },
        setWorkExperience: ({ commit }, payload) => {
            commit("setWorkExperience", payload);
        },
        setFinantialInfo: ({ commit }, payload) => {
            commit("setFinantialInfo", payload);
        },
    },
    getters: {
        getAllStates: (state) => {
            return {
                ...state.demographics,
                ...state.workExperience,
                ...state.finantialInfo,
            };
        },
    },
    modules: {},
});
