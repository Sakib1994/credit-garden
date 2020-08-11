import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    demographics: {
      address1yrs: 0,
      address1stat: "",
      address1type: "",
      address2yrs: 0,
      address2stat: "",
      address2type: "",
      marital_status: "",
      gender: "",
      num_depend: 0,
      num_dep_living_with_you: 0,
      age: 0,
    },
    workExperience: {
      employ_types1: "",
      employ_det1: "",
      yrs_posn1: 0,
      industry1: "",
      employ_types2: "",
      employ_det2: "",
      yrs_posn2: 0,
      industry2: "",
      employ_types3: "",
      employ_det3: "",
      yrs_posn3: 0,
      industry3: "",
    },
    finantialInfo: {
      loan_amt: 0,
      loan_term_mths: 0,
      secured_flag: "",
      asset_value: 0,
      asset_type: "",
      loan_purpose: "",
      credit_card: 0,
      mortgage: 0,
      car_loan: 0,
      other_loan: 0,
      rent: 0,
      utilities: 0,
      ins_pymt: 0,
      life_ins_prem: 0,
      transport_exp: 0,
      living_exp: 0,
      education_exp: 0,
      medical: 0,
      entertainment: 0,
      other_income: 0,
      net_mthly_income: 0,
      other_expenses: 0,
      bankrupt_flag: "",
      bankrupt_time_yrs: 0,
    },
  },
  mutations: {
    setDemographics: (state,payload) => state.demographics = payload,
    setWorkExperience: (state,payload) => state.workExperience = payload,
    setFinantialInfo: (state,payload) => state.finantialInfo = payload,
  },
  actions: {
    setDemographics: ({commit}, payload) => {
      commit('setDemographics', payload)
    },
    setWorkExperience: ({commit}, payload) => {
      commit('setWorkExperience', payload)
    },
    setFinantialInfo: ({commit}, payload) => {
      commit('setFinantialInfo', payload)
    }
  },
  getters: {
    getAllStates: (state) => { 
      return {...state.demographics, ...state.workExperience,  ...state.finantialInfo}
    }
  },
  modules: {
  }
})
