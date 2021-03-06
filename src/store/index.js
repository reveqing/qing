import Vue from "vue"
import Vuex from "vuex"
import city from "./city"
import carts from "./carts"
Vue.use(Vuex);
const state={}
const actions={}
const mutations={}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    modules:{
        city,
        carts
    }
})